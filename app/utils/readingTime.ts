/**
 * Calculates the reading time for a given text based on word count.
 * The average reading speed is 200-250 words per minute for adults.
 * This function uses 225 words per minute as a standard rate.
 * 
 * @param text The text content to analyze
 * @returns Reading time in minutes, rounded to the nearest minute with a minimum of 1 minute
 */
export function calculateReadingTime(text: string): number {
  // Remove HTML tags if present
  const plainText = text.replace(/<[^>]*>/g, '');
  
  // Count words by splitting on whitespace
  const words = plainText.trim().split(/\s+/).length;
  
  // Calculate reading time in minutes (225 words per minute is average reading speed)
  const readingTimeMinutes = words / 225;
  
  // If the content mentions a word count in brackets like [approximately 1800 words...], use that as a better estimate
  const wordCountMatch = text.match(/approximately (\d+) words/i);
  if (wordCountMatch && wordCountMatch[1]) {
    const approximateWordCount = parseInt(wordCountMatch[1], 10);
    if (!isNaN(approximateWordCount) && approximateWordCount > words) {
      // Use the approximate word count from the content snippet instead
      return Math.max(1, Math.round(approximateWordCount / 225));
    }
  }
  
  // Round to the nearest minute, with a minimum of 1 minute
  return Math.max(1, Math.round(readingTimeMinutes));
}

/**
 * Formats the reading time as a string.
 * 
 * @param minutes The reading time in minutes
 * @returns Formatted string like "5 min read"
 */
export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
} 