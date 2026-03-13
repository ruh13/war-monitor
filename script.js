// --- TAB SWITCHING LOGIC WITH CSS MOTION ---
function switchTab(tabId, el) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active-tab');
        setTimeout(() => tab.classList.add('hidden-tab'), 300); 
    });
    
    setTimeout(() => {
        const target = document.getElementById(tabId);
        target.classList.remove('hidden-tab');
        void target.offsetWidth; 
        target.classList.add('active-tab');
        if(tabId === 'map-section' && map) map.resize();
    }, 300);
    
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active-nav'));
    if(el) el.classList.add('active-nav');
}

// --- GLOBAL DYNAMIC ALERT ENGINE ---
function triggerGlobalAlert(eventType) {
    const els = document.querySelectorAll('.panel, #main-nav');
    els.forEach(el => el.classList.remove('alert-missile', 'alert-siren', 'alert-drone', 'alert-intercept'));

    let duration = 10000; let cName = 'alert-missile';
    if(eventType === 'siren') { duration = 20000; cName = 'alert-siren'; }
    else if(eventType === 'drone') { duration = 10000; cName = 'alert-drone'; }
    else if(eventType === 'intercept') { duration = 10000; cName = 'alert-intercept'; }

    els.forEach(el => el.classList.add(cName));
    setTimeout(() => { els.forEach(el => el.classList.remove(cName)); }, duration);
}

// --- INSTANT CACHE ENGINE ---
function loadFromCache(id) {
    try {
