/**
 * Handles the dropdown menu toggle
 * @param {string} id - The ID of the dropdown menu
 */
export const dropdown = (id: string) => {
  const button = document.querySelector(`[data-dropdown-toggle="${id}"]`);
  const dropdown = document.getElementById(id);
  const svg = button?.querySelector('svg'); // Use optional chaining for safer access

  /**
   * Handles the click event
   * @param {MouseEvent} event - The click event
   */
  const handleClick = (event: MouseEvent) => {
    // Check if the click occurs inside the button or the dropdown
    if ((button && button.contains(event.target as Node)) || (dropdown && dropdown.contains(event.target as Node))) {
      // Toggle visibility of the dropdown and rotate the SVG icon if available
      dropdown?.classList.toggle('hidden');
      svg?.classList.toggle('rotate-180');
    } else {
      // Hide the dropdown and reset the SVG icon rotation if available
      dropdown?.classList.add('hidden');
      svg?.classList.remove('rotate-180');
    }
  };

  // Add event listener to handle clicks
  document.addEventListener('click', handleClick);
};