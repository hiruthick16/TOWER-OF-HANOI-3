const rod1 = document.getElementById('rod1');
const rod2 = document.getElementById('rod2');
const rod3 = document.getElementById('rod3');

let dragged = null;

// Create initial 3 disks
for (let i = 3; i >= 1; i--) {
  const disk = document.createElement('div');
  disk.className = 'disk';
  disk.setAttribute('draggable', 'true');
  disk.dataset.size = i;
  disk.textContent = `Disk ${i}`;
  rod1.appendChild(disk);
}

document.querySelectorAll('.rod').forEach(rod => {
  rod.addEventListener('dragstart', e => {
    const target = e.target;
    if (target.classList.contains('disk') && target === target.parentElement.lastElementChild) {
      dragged = target;
    } else {
      e.preventDefault(); // only top disk can be dragged
    }
  });

  rod.addEventListener('dragover', e => {
    e.preventDefault();
  });

  rod.addEventListener('drop', e => {
    if (!dragged) return;

    const topDisk = rod.lastElementChild;
    if (!topDisk || +dragged.dataset.size < +topDisk.dataset.size) {
      rod.appendChild(dragged);
    }

    dragged = null;
  });
});
