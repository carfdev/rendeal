/**
 * Handles the hamburger menu toggle
 * @param {string} id - The ID of the hamburger menu
 */
export const menu = (id: string) => {
  const button = document.querySelector(`[data-collapse-toggle="${id}"]`);

  // Add event listener to toggle visibility of the dropdown menu
  button?.addEventListener('click', () => {
    const dropdown = document.getElementById(id);
    dropdown?.classList.toggle('hidden');
  });
};