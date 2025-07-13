document.addEventListener('DOMContentLoaded', () => {
    // Berry Avenue Idle Animation Codes
    const codes = [
        { name: "Default Walk Idle", code: "4211409027", category: "walking" },
        { name: "Cute Sit Idle", code: "11600321661", category: "sitting" },
        { name: "Stylish Stand", code: "9045389581", category: "standing" },
        { name: "Relaxed Pose", code: "13736024184", category: "standing" },
        { name: "Confident Stance", code: "13736079069", category: "standing" },
        { name: "Graceful Sway", code: "13736024184", category: "standing" },
        { name: "Happy Bounce", code: "13736079069", category: "standing" },
        { name: "Cool Lean", code: "9045389581", category: "standing" },
        { name: "Casual Walk", code: "4211409027", category: "walking" },
        { name: "Elegant Sit", code: "11600321661", category: "sitting" },
        { name: "Power Pose", code: "13736079069", category: "standing" },
        { name: "Chill Vibe", code: "13736024184", category: "standing" },
        { name: "Friendly Wave", code: "9045389581", category: "standing" },
        { name: "Thoughtful Pose", code: "13736024184", category: "standing" },
        { name: "Confident Walk", code: "4211409027", category: "walking" },
        { name: "Comfortable Sit", code: "11600321661", category: "sitting" },
        { name: "Dynamic Stand", code: "9045389581", category: "standing" },
        { name: "Relaxed Walk", code: "4211409027", category: "walking" },
        { name: "Elegant Pose", code: "13736079069", category: "standing" },
        { name: "Casual Stance", code: "13736024184", category: "standing" }
    ];

    const codesList = document.getElementById('codes-list');
    const searchInput = document.getElementById('search-input');
    let filteredCodes = [...codes];

    // Function to display codes
    function displayCodes(codesToShow = codes) {
        codesList.innerHTML = '';
        
        if (codesToShow.length === 0) {
            codesList.innerHTML = `
                <div class="empty-state">
                    <h3>No animations found</h3>
                    <p>Try adjusting your search terms</p>
                </div>
            `;
            return;
        }

        codesToShow.forEach(animationCode => {
            const listItem = document.createElement('li');

            const codeInfoDiv = document.createElement('div');
            codeInfoDiv.classList.add('code-info');

            const nameElement = document.createElement('h2');
            nameElement.textContent = animationCode.name;

            const codeElement = document.createElement('p');
            codeElement.textContent = animationCode.code;

            codeInfoDiv.appendChild(nameElement);
            codeInfoDiv.appendChild(codeElement);

            const copyButton = document.createElement('button');
            copyButton.classList.add('copy-button');
            copyButton.textContent = 'Copy';
            
            copyButton.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(animationCode.code);
                    
                    // Visual feedback
                    copyButton.textContent = 'Copied!';
                    copyButton.classList.add('copied');
                    
                    // Reset button after 2 seconds
                    setTimeout(() => {
                        copyButton.textContent = 'Copy';
                        copyButton.classList.remove('copied');
                    }, 2000);
                    
                    // Haptic feedback on mobile
                    if ('vibrate' in navigator) {
                        navigator.vibrate(50);
                    }
                    
                } catch (err) {
                    console.error('Failed to copy text: ', err);
                    
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = animationCode.code;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    
                    // Show feedback even with fallback
                    copyButton.textContent = 'Copied!';
                    copyButton.classList.add('copied');
                    
                    setTimeout(() => {
                        copyButton.textContent = 'Copy';
                        copyButton.classList.remove('copied');
                    }, 2000);
                }
            });

            listItem.appendChild(codeInfoDiv);
            listItem.appendChild(copyButton);
            codesList.appendChild(listItem);
        });
    }

    // Search functionality
    function filterCodes(searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        
        if (term === '') {
            filteredCodes = [...codes];
        } else {
            filteredCodes = codes.filter(code => 
                code.name.toLowerCase().includes(term) ||
                code.code.includes(term) ||
                code.category.toLowerCase().includes(term)
            );
        }
        
        displayCodes(filteredCodes);
    }

    // Add search input listener
    searchInput.addEventListener('input', (e) => {
        filterCodes(e.target.value);
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
        
        // Escape to clear search
        if (e.key === 'Escape' && document.activeElement === searchInput) {
            searchInput.value = '';
            filterCodes('');
        }
    });

    // Initial display
    displayCodes();

    // Add service worker for PWA functionality
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    console.log('SW registered: ', registration);
                })
                .catch((registrationError) => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }

    // Add touch feedback for mobile
    document.addEventListener('touchstart', () => {}, {passive: true});
}); 