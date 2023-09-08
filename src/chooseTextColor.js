function calculateLuminance(color) {
    // Remove '#' if it exists
    color = color.replace(/^#/, '');

    // Convert color to RGB
    const r = parseInt(color.slice(0, 2), 16) / 255;
    const g = parseInt(color.slice(2, 4), 16) / 255;
    const b = parseInt(color.slice(4, 6), 16) / 255;

    // Calculate luminance using the sRGB formula
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    return luminance;
}

export default function chooseTextColor(background_color) {
    // Calculate the luminance of the background color
    const backgroundLuminance = calculateLuminance(background_color);

    // Determine the text color based on luminance
    return backgroundLuminance > 0.5 ? 'black' : 'white';
}