import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for performance metrics (in production, use a database)
let performanceMetrics: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const metric = await request.json();
    
    // Validate the metric data
    if (!metric.name || typeof metric.value !== 'number') {
      return NextResponse.json(
        { error: 'Invalid metric data' },
        { status: 400 }
      );
    }

    // Add timestamp if not provided
    if (!metric.timestamp) {
      metric.timestamp = Date.now();
    }

    // Add user agent and other context
    metric.userAgent = request.headers.get('user-agent');
    metric.url = request.headers.get('referer') || 'unknown';
    metric.ip = request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                'unknown';

    // Store the metric
    performanceMetrics.push(metric);

    // Keep only the last 1000 metrics to prevent memory issues
    if (performanceMetrics.length > 1000) {
      performanceMetrics = performanceMetrics.slice(-1000);
    }

    // Log important metrics
    if (metric.rating === 'poor') {
      console.warn('Poor performance metric:', {
        name: metric.name,
        value: metric.value,
        url: metric.url,
        timestamp: new Date(metric.timestamp).toISOString(),
      });
    }

    // In production, you would save to a database here
    // await saveMetricToDatabase(metric);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing performance metric:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');
    const limit = parseInt(searchParams.get('limit') || '100');
    const since = searchParams.get('since');

    let filteredMetrics = performanceMetrics;

    // Filter by metric name
    if (name) {
      filteredMetrics = filteredMetrics.filter(m => m.name === name);
    }

    // Filter by timestamp
    if (since) {
      const sinceTime = parseInt(since);
      filteredMetrics = filteredMetrics.filter(m => m.timestamp >= sinceTime);
    }

    // Limit results
    filteredMetrics = filteredMetrics.slice(-limit);

    // Calculate summary statistics
    const summary = calculateSummary(filteredMetrics);

    return NextResponse.json({
      metrics: filteredMetrics,
      summary,
      total: performanceMetrics.length,
    });
  } catch (error) {
    console.error('Error retrieving performance metrics:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function calculateSummary(metrics: any[]) {
  if (metrics.length === 0) {
    return {
      count: 0,
      average: 0,
      min: 0,
      max: 0,
      poor: 0,
      needsImprovement: 0,
      good: 0,
    };
  }

  const values = metrics.map(m => m.value).filter(v => typeof v === 'number');
  const ratings = metrics.map(m => m.rating);

  return {
    count: metrics.length,
    average: values.reduce((sum, val) => sum + val, 0) / values.length,
    min: Math.min(...values),
    max: Math.max(...values),
    poor: ratings.filter(r => r === 'poor').length,
    needsImprovement: ratings.filter(r => r === 'needs-improvement').length,
    good: ratings.filter(r => r === 'good').length,
  };
} 