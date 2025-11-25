document.addEventListener('DOMContentLoaded', () => {
    const filterTabsContainer = document.querySelector('.filter-tabs');
    const projectListContainer = document.querySelector('.project-list');

    // Only run this script on pages with project filters
    if (!filterTabsContainer || !projectListContainer) {
        return;
    }

    const loadProjectContent = async (url, pushState = true) => {
        try {
            // 1. Fetch the content of the target page
            const response = await fetch(url);
            const text = await response.text();

            // 2. Parse the fetched HTML to find the new content
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            
            const newProjectList = doc.querySelector('.project-list');
            const newTitle = doc.querySelector('title').innerText;

            if (newProjectList) {
                // 3. Replace the project list and apply a fade-in animation
                projectListContainer.innerHTML = newProjectList.innerHTML;
                projectListContainer.classList.remove('fade-in', 'delay-3');
                // Trigger reflow to restart animation
                void projectListContainer.offsetWidth; 
                projectListContainer.classList.add('fade-in');

                // 4. Update the page title
                document.title = newTitle;

                // 5. Update the URL in the browser's address bar without reloading
                if (pushState) {
                    history.pushState({ path: url }, newTitle, url);
                }
            }
        } catch (error) {
            console.error('Failed to load project content:', error);
            // If fetching fails, redirect as a fallback
            window.location.href = url;
        }
    };

    // Add click listeners to the filter tabs
    filterTabsContainer.addEventListener('click', (e) => {
        // Check if a tab button was clicked
        if (e.target.matches('.tab-btn')) {
            e.preventDefault(); // Prevent the default link navigation

            // Update the active state for the tabs
            filterTabsContainer.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');

            const url = e.target.href;
            loadProjectContent(url);
        }
    });

    // Handle browser back/forward button navigation
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.path) {
            // Update active tab based on URL
            const activeTab = filterTabsContainer.querySelector(`a[href="${e.state.path}"]`);
            if (activeTab) {
                 filterTabsContainer.querySelector('.active').classList.remove('active');
                 activeTab.classList.add('active');
            }
            // Load content without pushing a new state
            loadProjectContent(e.state.path, false);
        }
    });

    // Store the initial page state for back/forward navigation
    history.replaceState({ path: window.location.href }, document.title, window.location.href);

    // Add keyboard shortcut to switch project tabs with 'P' key
    document.addEventListener('keydown', (e) => {
        // Check if 'p' was pressed and we are on a projects page
        if (e.key.toLowerCase() === 'p') {
            // Find all tabs and the currently active one
            const tabs = Array.from(filterTabsContainer.querySelectorAll('.tab-btn'));
            const currentIndex = tabs.findIndex(tab => tab.classList.contains('active'));

            if (currentIndex !== -1) {
                // Calculate the index of the next tab, wrapping around if necessary
                const nextIndex = (currentIndex + 1) % tabs.length;
                
                // Trigger a click on the next tab to switch categories





});    });        }            }                tabs[nextIndex].click();                tabs[nextIndex].click();
            }
        }
    });
});