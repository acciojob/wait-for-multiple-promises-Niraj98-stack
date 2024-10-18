//your JS code here. If required.
function createPromise(id) {
    return new Promise((resolve) => {
        const time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
        setTimeout(() => {
            resolve({ id: `Promise ${id}`, time: time.toFixed(3) });
        }, time * 1000);
    });
}

const promise1 = createPromise(1);
const promise2 = createPromise(2);
const promise3 = createPromise(3);

const startTime = performance.now();

Promise.all([promise1, promise2, promise3]).then((results) => {
    const totalTime = ((performance.now() - startTime) / 1000).toFixed(3);

    // Get table body and remove the loading row
    const tableBody = document.getElementById('promiseTable');
    document.getElementById('loadingRow').remove();

    // Add rows for each promise result
    results.forEach((result) => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const timeCell = document.createElement('td');

        nameCell.textContent = result.id;
        timeCell.textContent = result.time;
        
        row.appendChild(nameCell);
        row.appendChild(timeCell);
        tableBody.appendChild(row);
    });

    // Add the total row
    const totalRow = document.createElement('tr');
    const totalLabelCell = document.createElement('td');
    const totalTimeCell = document.createElement('td');

    totalLabelCell.textContent = 'Total';
    totalTimeCell.textContent = totalTime;

    totalRow.appendChild(totalLabelCell);
    totalRow.appendChild(totalTimeCell);
    tableBody.appendChild(totalRow);
});
