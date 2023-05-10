const createBookingMenu = () => {
    const bookingContainer = document.querySelector('.container');
    const form = document.createElement('form');
    form.classList.add('booking__form');

    const createOption = function(value, text) {
        const option = document.createElement("option");
        option.value = value;
        option.text = text;
        return option;
    };

    const towerWrapper = document.createElement('div');
    const towerLabel = document.createElement('label');
    const towerSelect = document.createElement('select');
    towerWrapper.classList.add('booking__tower', 'wrapper');
    towerLabel.classList.add('tower__label', 'label');
    towerSelect.classList.add('tower__select');
    towerLabel.textContent = 'Выберите башню:';
    towerSelect.id = 'tower-select';
    towerLabel.for = 'tower-select';
    towerSelect.appendChild(createOption("А", "Башня А"));
    towerSelect.appendChild(createOption("B", "Башня B"));
    towerWrapper.append(towerLabel, towerSelect);

    const floorWrapper = document.createElement('div');
    const floorLabel = document.createElement('label');
    const floorSelect = document.createElement('select');
    floorWrapper.classList.add('booking__floor', 'wrapper');
    floorLabel.classList.add('floor__label', 'label');
    floorSelect.classList.add('floor__select');
    floorLabel.textContent = 'Выберите этаж:';
    floorSelect.id = 'floor-select';
    floorLabel.for = 'floor-select';
    for (let i = 3; i <= 27; i++) {
        floorSelect.appendChild(createOption(i.toString(), "Этаж " + i.toString()));
    };  
    floorWrapper.append(floorLabel, floorSelect);

    const roomWrapper = document.createElement('div');
    const roomLabel = document.createElement('label');
    const roomSelect = document.createElement('select');
    roomWrapper.classList.add('booking__room', 'wrapper');
    roomLabel.classList.add('room__label', 'label');
    roomSelect.classList.add('room__select');
    roomLabel.textContent = 'Выберите переговорку:';
    roomSelect.id = 'room-select';
    roomLabel.for = 'room-select';
    for (let i = 1; i <= 10; i++) {
        roomSelect.appendChild(createOption(i.toString(), "Переговорка " + i.toString()));
    };
    roomWrapper.append(roomLabel,roomSelect);

    const dateWrapper = document.createElement('div');
    const dateLabel = document.createElement('label');
    const dateInput = document.createElement('input');
    dateWrapper.classList.add('booking__date', 'wrapper');
    dateLabel.classList.add('date__label', 'label');
    dateInput.classList.add('date__input');
    dateLabel.textContent = 'Выберите дату:';
    dateLabel.for = 'date-select';
    dateInput.id = 'date-select';
    dateInput.type = 'date';
    dateWrapper.append(dateLabel, dateInput);

    const timeWrapper = document.createElement('div');
    const timeLabel = document.createElement('label');
    const timeSelect = document.createElement('select');
    timeWrapper.classList.add('booking__time', 'wrapper');
    timeLabel.classList.add('time__label', 'label');
    timeSelect.classList.add('time__select');
    timeLabel.textContent = 'Выберите время:';
    timeLabel.for = 'time-select';
    timeSelect.id = 'time-select';
    for (let i = 9; i <= 19; i++) {
        timeSelect.appendChild(createOption(`${i}:00-${i+1}:00`, `${i}:00-${i+1}:00`));
    };  
    timeWrapper.append(timeLabel, timeSelect);    

    const commentWrapper = document.createElement('div');
    const commentLabel = document.createElement('label');
    const commentTextarea = document.createElement('textarea');
    commentWrapper.classList.add('booking__comment', 'wrapper');
    commentLabel.classList.add('comment__label', 'label');
    commentTextarea.classList.add('comment__textarea');
    commentLabel.textContent = 'Комментарий:';
    commentLabel.for = 'comment-select';
    commentTextarea.id = 'comment-select';
    commentWrapper.append(commentLabel, commentTextarea);

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('booking__buttons', 'wrapper');
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Отправить';
    submitButton.classList.add('button__submit', 'btn');
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Очистить';
    clearButton.classList.add('button__clear', 'btn');
    buttonWrapper.append(submitButton, clearButton);

    form.append(
        towerWrapper,
        floorWrapper,
        roomWrapper,
        dateWrapper,
        timeWrapper,
        commentWrapper,
        buttonWrapper);
    bookingContainer.append(form);

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        let data = {
         tower: towerSelect.value,
         floor: floorSelect.value,
         room: roomSelect.value,
         date: dateInput.value,
         time: timeSelect.value,
         comment: commentTextarea.value
        };
        console.log(JSON.stringify(data));
    });
     
    clearButton.addEventListener("click", function() {
        form.reset();
    });
}

createBookingMenu();