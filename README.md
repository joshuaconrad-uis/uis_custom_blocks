# uis_custom_blocks
Custom Module For ReactNative Block Development

# UIS Custom Blocks

Custom Module For ReactNative Block Development for the UIS Drupal Gutenberg Website.

## Overview

This module provides custom Gutenberg blocks for the UIS Drupal website. It uses React to create reusable components that can be added to any Gutenberg-enabled content type.

Currently, the module includes the following blocks:
- **UIS Card** - A styled card component with header, title, content, and optional link
- **My Custom Block** - A simple text block (example/template)

## Installation

### Prerequisites
- Drupal 10.x
- Gutenberg module installed and enabled
- Node.js (v16+) and npm (v8+)

### Step 1: Clone the Repository
cd [drupal-root]/modules/custom/
git clone [repository-url] uis_custom_blocks
cd uis_custom_blocks

### Step 2: Install Dependencies
cd js
npm install

### Step 3: Build the Block
npm run build
This will compile all React components and styles into the `/js/build` directory.


### Step 4: Enable the Module

1. Navigate to your Drupal admin interface
2. Go to Extend (/admin/modules)
3. Find "UIS Custom Blocks" in the list
4. Check the box and click "Install"

or you can just run the drush en uis_custom_blocks commands

## Usage

Once installed, the custom blocks will be available in the Gutenberg editor:

1. Edit any content that uses the Gutenberg editor
2. Click the "+" button to add a block
3. Look for the "Common" category
4. Select either "UIScard" or "My Custom Block"
5. Configure the block using the sidebar options

## Development

### Project Structure

- `/uis_custom_blocks.module` - Contains Drupal hooks for integrating with Gutenberg
- `/uis_custom_blocks.libraries.yml` - Defines JavaScript and CSS assets
- `/uis_custom_blocks.info.yml` - Module information and dependencies
- `/js/src/blocks/` - Contains individual block definitions
- `/js/src/index.js` - Registers all blocks with Gutenberg
- `/js/src/editor.js` - Editor-specific code and styles
- `/js/src/frontend.js` - Frontend-specific code and styles


### Adding a New Block
1. Create a new directory in `/js/src/blocks/` for your block
2. Create the following files in your block directory:
   - `index.js` - Block registration
   - `edit.js` - Editor component
   - `save.js` - Frontend component
   - `style.scss` - Frontend styles
   - `editor.scss` - Editor-only styles
3. Register your block in `/js/src/index.js`
4. Add your block definition to the `uis_custom_blocks_gutenberg_blocks()` function in `uis_custom_blocks.module`
5. Run `npm run build` to compile your changes

### Development Workflow

I haven't tested development mode yet so this could end up taking some Troubleshooting but I know
for sure building the blocks and checking changes after will work
1. Make changes to your block components
2. Run `npm start` to start the webpack development server with hot reloading
3. Test your changes in the Gutenberg editor


4. When finished, run `npm run build` to create production-ready assets
5. Clear the Drupal cache to see your changes

## Customizing Existing Blocks

### UIS Card Block

The UIS Card block provides the following customization options:
- Header text (organization name)
- Title (main card heading)
- Content (card body text)
- Link URL (optional link for the entire card)

Styles can be customized by modifying the `/js/src/blocks/uis-card/style.scss` file.

## Troubleshooting

- **Blocks not appearing**: Clear the Drupal cache and ensure the module is enabled
- **Styling issues**: Check browser console for errors and ensure CSS is being loaded
- **JavaScript errors**: Check browser console for errors and ensure all dependencies are installed
- **Build failures**: Ensure Node.js and npm are up to date and all dependencies are installed

## Additional Resources

- [Drupal Gutenberg Documentation](https://www.drupal.org/docs/8/modules/gutenberg)
- [WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
