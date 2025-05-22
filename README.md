# Restaurant Webpage

A single-page restaurant website built with [Vite](https://vitejs.dev/), using ES modules for clean componentization.

## Features

- **Modular structure**:  
  - `src/js/pages/` contains page renderers (home, menu, contact)  
  - `src/js/components/` holds shared UI parts (navbar, hero, footer)  
  - `src/css/components/` mirrors the component layout for scoped styling  
- **Import/Export**:  
  - Each module exports a `render…()` function  
  - Styles are imported at the top of their JS modules to keep CSS co-located  
