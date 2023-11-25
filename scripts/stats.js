let isFilterOptionsOpen = false;

function toggleFilterOptions() {
  const filterOptions = document.querySelector("#filter-options");
  filterOptions.classList.toggle("is-open");
  isFilterOptionsOpen = !isFilterOptionsOpen;
}

function loadGraph(container, dataPoints, currency, run) {
    if (run) {
        var ctx = document.getElementById(container).getContext('2d');

        var chart = new Chart(ctx, {
            type: 'pie',
            data: {
                datasets: [{
                    data: dataPoints.map(point => point.y),
                }],
                labels: dataPoints.map(point => `${point.label} (${new Intl.NumberFormat(navigator.language, { style: 'currency', currency }).format(point.y)})`),
            },
            options: {
                animation: {
                    animateRotate: true,
                    animateScale: true,
                },
            },
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('mousedown', function(event) {
      const filterOptions = document.querySelector('#filter-options');
      const filterButton = document.querySelector("#filter-button");

      if (!filterOptions.contains(event.target) && !filterButton.contains(event.target) && isFilterOptionsOpen) {
        filterOptions.classList.remove('is-open');
        isFilterOptionsOpen = false;
      }
    });

    document.querySelector('#filter-options').addEventListener('focus', function() {
        isFilterOptionsOpen = true;
    });
});