/**
 * Random name generator for new notes
 */

const adjectives = [
  'Dreamy', 'Mystic', 'Golden', 'Silver', 'Crimson', 'Azure', 'Emerald',
  'Velvet', 'Cosmic', 'Ethereal', 'Luminous', 'Serene', 'Radiant', 'Majestic',
  'Enchanted', 'Whimsical', 'Tranquil', 'Vibrant', 'Elegant', 'Graceful',
  'Mysterious', 'Brilliant', 'Delicate', 'Harmonious', 'Pristine'
];

const nouns = [
  'Mountain', 'River', 'Forest', 'Ocean', 'Desert', 'Valley', 'Garden',
  'Castle', 'Bridge', 'Lighthouse', 'Meadow', 'Waterfall', 'Canyon', 'Lake',
  'Island', 'Prairie', 'Sunset', 'Dawn', 'Storm', 'Breeze', 'Horizon',
  'Compass', 'Journey', 'Adventure', 'Dream', 'Story', 'Memory', 'Thought'
];

/**
 * Generate a random name for a new note
 */
export const generateRandomName = (): string => {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adjective} ${noun}`;
};

/**
 * Generate a unique random name that doesn't exist in existing notes
 */
export const generateUniqueRandomName = (existingNames: string[]): string => {
  let name = generateRandomName();
  let attempts = 0;
  
  while (existingNames.includes(name) && attempts < 100) {
    name = generateRandomName();
    attempts++;
  }
  
  // If we can't find a unique name after 100 attempts, add a number
  if (existingNames.includes(name)) {
    let counter = 1;
    while (existingNames.includes(`${name} ${counter}`)) {
      counter++;
    }
    name = `${name} ${counter}`;
  }
  
  return name;
};