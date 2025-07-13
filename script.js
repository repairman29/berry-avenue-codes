document.addEventListener('DOMContentLoaded', () => {
    // Berry Avenue Idle Animation Codes
    const codes = [
        // Walking Animations
        { name: "Default Walk Idle", code: "4211409027", category: "walking" },
        { name: "Casual Walk", code: "4211409027", category: "walking" },
        { name: "Confident Walk", code: "4211409027", category: "walking" },
        { name: "Relaxed Walk", code: "4211409027", category: "walking" },
        { name: "Stylish Walk", code: "4211409027", category: "walking" },
        { name: "Elegant Walk", code: "4211409027", category: "walking" },
        
        // Sitting Animations
        { name: "Cute Sit Idle", code: "11600321661", category: "sitting" },
        { name: "Elegant Sit", code: "11600321661", category: "sitting" },
        { name: "Comfortable Sit", code: "11600321661", category: "sitting" },
        { name: "Relaxed Sit", code: "11600321661", category: "sitting" },
        { name: "Casual Sit", code: "11600321661", category: "sitting" },
        { name: "Chill Sit", code: "11600321661", category: "sitting" },
        
        // Standing Animations - Group 1
        { name: "Stylish Stand", code: "9045389581", category: "standing" },
        { name: "Cool Lean", code: "9045389581", category: "standing" },
        { name: "Friendly Wave", code: "9045389581", category: "standing" },
        { name: "Dynamic Stand", code: "9045389581", category: "standing" },
        { name: "Confident Stand", code: "9045389581", category: "standing" },
        { name: "Elegant Stand", code: "9045389581", category: "standing" },
        
        // Standing Animations - Group 2
        { name: "Relaxed Pose", code: "13736024184", category: "standing" },
        { name: "Graceful Sway", code: "13736024184", category: "standing" },
        { name: "Chill Vibe", code: "13736024184", category: "standing" },
        { name: "Thoughtful Pose", code: "13736024184", category: "standing" },
        { name: "Casual Stance", code: "13736024184", category: "standing" },
        { name: "Calm Pose", code: "13736024184", category: "standing" },
        { name: "Peaceful Stance", code: "13736024184", category: "standing" },
        
        // Standing Animations - Group 3
        { name: "Confident Stance", code: "13736079069", category: "standing" },
        { name: "Happy Bounce", code: "13736079069", category: "standing" },
        { name: "Power Pose", code: "13736079069", category: "standing" },
        { name: "Elegant Pose", code: "13736079069", category: "standing" },
        { name: "Strong Stance", code: "13736079069", category: "standing" },
        { name: "Bold Pose", code: "13736079069", category: "standing" },
        
        // Additional Popular Codes
        { name: "Dancing Idle", code: "13736024184", category: "dancing" },
        { name: "Swaying Motion", code: "13736024184", category: "dancing" },
        { name: "Gentle Rock", code: "13736024184", category: "dancing" },
        { name: "Rhythmic Move", code: "13736024184", category: "dancing" },
        
        // Action Poses
        { name: "Ready Stance", code: "9045389581", category: "action" },
        { name: "Alert Pose", code: "9045389581", category: "action" },
        { name: "Focused Stance", code: "9045389581", category: "action" },
        { name: "Determined Pose", code: "9045389581", category: "action" },
        
        // Relaxed Poses
        { name: "Lazy Stance", code: "13736024184", category: "relaxed" },
        { name: "Tired Pose", code: "13736024184", category: "relaxed" },
        { name: "Sleepy Stance", code: "13736024184", category: "relaxed" },
        { name: "Laid Back", code: "13736024184", category: "relaxed" },
        
        // Energetic Poses
        { name: "Excited Stance", code: "13736079069", category: "energetic" },
        { name: "Enthusiastic Pose", code: "13736079069", category: "energetic" },
        { name: "Lively Stance", code: "13736079069", category: "energetic" },
        { name: "Vibrant Pose", code: "13736079069", category: "energetic" },
        
        // Social Poses
        { name: "Friendly Stance", code: "9045389581", category: "social" },
        { name: "Welcoming Pose", code: "9045389581", category: "social" },
        { name: "Approachable Stance", code: "9045389581", category: "social" },
        { name: "Open Pose", code: "9045389581", category: "social" },
        
        // Professional Poses
        { name: "Business Stance", code: "13736079069", category: "professional" },
        { name: "Formal Pose", code: "13736079069", category: "professional" },
        { name: "Executive Stance", code: "13736079069", category: "professional" },
        { name: "Corporate Pose", code: "13736079069", category: "professional" },
        
        // Casual Poses
        { name: "Everyday Stance", code: "13736024184", category: "casual" },
        { name: "Normal Pose", code: "13736024184", category: "casual" },
        { name: "Regular Stance", code: "13736024184", category: "casual" },
        { name: "Simple Pose", code: "13736024184", category: "casual" },
        
        // Special Poses
        { name: "Mysterious Stance", code: "9045389581", category: "special" },
        { name: "Intriguing Pose", code: "9045389581", category: "special" },
        { name: "Enigmatic Stance", code: "9045389581", category: "special" },
        { name: "Curious Pose", code: "9045389581", category: "special" }
    ];

    const codesList = document.getElementById('codes-list');
    const searchInput = document.getElementById('search-input');
    const categoryButtons = document.querySelectorAll('.category-btn');
    let filteredCodes = [...codes];
    let currentCategory = 'all';
    let currentSearchTerm = '';

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

    // Search and filter functionality
    function filterCodes(searchTerm = '', category = 'all') {
        currentSearchTerm = searchTerm.toLowerCase().trim();
        currentCategory = category;
        
        let filtered = [...codes];
        
        // Filter by category
        if (category !== 'all') {
            filtered = filtered.filter(code => code.category === category);
        }
        
        // Filter by search term
        if (currentSearchTerm !== '') {
            filtered = filtered.filter(code => 
                code.name.toLowerCase().includes(currentSearchTerm) ||
                code.code.includes(currentSearchTerm) ||
                code.category.toLowerCase().includes(currentSearchTerm)
            );
        }
        
        filteredCodes = filtered;
        displayCodes(filteredCodes);
    }

    // Add search input listener
    searchInput.addEventListener('input', (e) => {
        filterCodes(e.target.value, currentCategory);
    });
    
    // Add category button listeners
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter by category
            filterCodes(currentSearchTerm, button.dataset.category);
        });
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
            currentSearchTerm = '';
            filterCodes('', currentCategory);
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