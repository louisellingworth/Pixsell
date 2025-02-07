I'll create a more detailed design system that explains the reasoning and context behind each choice, along with specific implementation details.

# Lunivate Design System Documentation

## Core Design Philosophy

The design system embodies three key principles:
1. Premium & Sophisticated: Dark theme with rich purples conveys high-end technology
2. Clear Hierarchy: Every element has purposeful contrast and spacing
3. Subtle Motion: Micro-interactions provide feedback without distraction

## Color System

### Primary Colors

1. Background Colors
- Deep Background: `#0A0A0B`
  - Used for: Main page background
  - Purpose: Creates depth and reduces eye strain
  - Implementation: `background-color: #0A0A0B`

- Secondary Background: `#131316`
  - Used for: Cards, containers, elevated elements
  - Purpose: Creates subtle layering
  - Implementation: `background-color: #131316`

2. Brand Colors
- Primary Purple: `#8A7FFB`
  - Used for: CTAs, important metrics, interactive elements
  - Purpose: Brand identification and user direction
  - Implementation: Both solid and gradient applications
  - Variations: 
    - Hover: `brightness(1.1)`
    - Active: `brightness(0.9)`
    - Disabled: `opacity: 0.5`

- Light Purple: `#B4B0FF`
  - Used for: Secondary elements, hover states, highlights
  - Purpose: Subtle brand reinforcement
  - Implementation: Accents and supporting elements

### Functional Colors

1. Success States
- Positive: `#22C55E`
  - Used for: Growth metrics, confirmations
  - Context: Always paired with '+' symbol for metrics

2. Warning/Error States
- Negative: `#EF4444`
  - Used for: Decline metrics, errors
  - Context: Always paired with '-' symbol for metrics

### Opacity System

- Text Hierarchy:
  - Primary Text: `rgba(255, 255, 255, 1)`
  - Secondary Text: `rgba(255, 255, 255, 0.8)`
  - Tertiary Text: `rgba(255, 255, 255, 0.6)`
  - Disabled: `rgba(255, 255, 255, 0.4)`

## Typography

### Font Stack
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Heading System

1. Display Headlines
```css
.display-large {
    font-size: 64px;
    line-height: 1.1;
    font-weight: 800;
    letter-spacing: -0.02em;
    background: linear-gradient(to right, #8A7FFB, #B4B0FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

2. Section Headers
```css
.section-header {
    font-size: 48px;
    line-height: 1.2;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 24px;
}
```

### Body Text
```css
.body-large {
    font-size: 18px;
    line-height: 1.6;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
}

.body-small {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.6);
}
```

## Component Design

### Cards

1. Standard Card
```css
.card {
    background: #131316;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 24px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
}

.card:hover {
    transform: translateY(-2px);
    border-color: rgba(138, 127, 251, 0.3);
    box-shadow: 0 8px 32px rgba(138, 127, 251, 0.1);
}
```

2. Statistic Card
```css
.stat-card {
    background: linear-gradient(145deg, #131316, #1A1A1F);
    border-radius: 16px;
    padding: 32px;
}

.stat-number {
    font-size: 48px;
    font-weight: 800;
    background: linear-gradient(to right, #8A7FFB, #B4B0FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

### Buttons

1. Primary Button
```css
.button-primary {
    background: #8A7FFB;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    color: white;
    transition: all 0.2s ease;
    border: none;
    cursor: pointer;
}

.button-primary:hover {
    transform: scale(1.05);
    background: #9589FF;
    box-shadow: 0 4px 12px rgba(138, 127, 251, 0.3);
}
```

2. Ghost Button
```css
.button-ghost {
    background: transparent;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    color: #8A7FFB;
    border: 1px solid #8A7FFB;
    transition: all 0.2s ease;
}

.button-ghost:hover {
    background: rgba(138, 127, 251, 0.1);
}
```

### Form Elements

1. Input Fields
```css
.input {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 12px 16px;
    color: white;
    transition: all 0.2s ease;
}

.input:focus {
    border-color: #8A7FFB;
    box-shadow: 0 0 0 3px rgba(138, 127, 251, 0.2);
    outline: none;
}
```

## Animation System

### Timing Functions
```css
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;
```

### Hover Transitions
```css
.interactive-element {
    transition: transform var(--transition-fast),
                box-shadow var(--transition-fast),
                background-color var(--transition-fast);
}
```

### Page Transitions
```css
.page-element {
    animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
```

## Layout & Spacing

### Grid System
```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    padding: 24px;
}
```

### Spacing Scale
```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-xxl: 48px;
```

### Container Widths
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}
```

## Responsive Design

### Breakpoints
```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

### Media Queries
```css
@media (max-width: 768px) {
    .display-large {
        font-size: 48px;
    }
    
    .section-header {
        font-size: 32px;
    }
}
```

## Accessibility

### Focus States
```css
:focus {
    outline: 2px solid #8A7FFB;
    outline-offset: 2px;
}
```

### Color Contrast
- All text maintains minimum contrast ratio of 4.5:1
- Interactive elements maintain minimum contrast ratio of 3:1

This comprehensive design system ensures consistency across the platform while maintaining the premium, technological feel of the brand. Each element has been carefully considered for both aesthetic appeal and functional purpose, creating a cohesive user experience that reinforces the brand's position as a sophisticated AI automation solution.