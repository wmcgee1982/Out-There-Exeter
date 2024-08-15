// JavaScript function to filter events
function filterEvents(category) {
    var events = document.querySelectorAll('.event-cat');
    
    events.forEach(function(event) {
        if (category === 'all' || event.getAttribute('data-category') === category) {
            event.classList.remove('hidden');
        } else {
            event.classList.add('hidden');
        }
    });
}
// JavaScript function to filter events
function filterEventsSmall(category) {
    var events = document.querySelectorAll('.event-cat-small');
    
    events.forEach(function(event) {
        if (category === 'all' || event.getAttribute('data-category') === category) {
            event.classList.remove('hidden');
        } else {
            event.classList.add('hidden');
        }
    });
}