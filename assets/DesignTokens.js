// DesignTokens.js

export const colors = {
    primary: '#003069', // Material Design primary color
    secondary: '#2370B3', // Material Design secondary color
    error: '#B00020', // Material Design error color
    white: '#FFFFFF', // Standard white
    black: '#000000', // Standard black
    lightGray: '#F5F5F5', // Light gray for backgrounds
    border: '#E0E0E0', // Light border color
    borderLight: '#BDBDBD', // Lighter border for inputs
    label: '#757575', // Material design label color
    focusedBorder: '#6200EE', // Color for input focused state
    overlay: 'rgba(0, 0, 0, 0.5)', // Transparent overlay color for menus
    lefticon: '#2370B3',
};

export const fontSizes = {
    title: 24, // Material headline font size
    large: 18, // Larger text, suitable for section headings
    medium: 16, // Regular body text
    small: 14, // Small text for hints, error messages, etc.
    input: 16, // Font size for text inputs
};

export const spacings = {
    extraSmall: 4,  // Minimal spacing, use for small adjustments
    small: 8, // Small padding/margin, common for input spacing
    medium: 16, // Default spacing for elements
    large: 24, // Larger spacing, used for significant separation
    none: 0, // No margin/padding
};

export const borderRadius = {
    small: 4, // Rounded corners for buttons, inputs, etc.
    medium: 8, // Medium border radius, typically for cards and containers
    none:0
};

export const boxShadow = {
    elevation1: 2, // Small shadow, typically used for buttons or inputs
    elevation2: 4, // Medium shadow, used for headers, modals, and cards
};

export const buttonStyles = {
    height: 56, // Material Design recommends 48dp for button height
    padding: spacings.medium, // Standard padding for buttons
};

export const autocompleteStyles = {
    height: 56, // Material Design input height
};
export const bordersToken = {
    default: {
        width: 1,
        color: '#E0E0E0', // Light gray border color
    },
    chevronBorder: {
        width: 1,
        color: '#E0E0E0', // Light gray border color
    },
};




export const iconStyles = {
    circleSize: 28, // Circle size for the chevron on the right
    chevronSize: 24, // Chevron size
};

