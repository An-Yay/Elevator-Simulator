// click event for change floors
const $changeFloor = $('#change-floors');
$changeFloor.click(display_set_floor_nums_dialog);

//click event for change elevators
const $setElevatorNumsButton = $('#change-lifts');
$changeLifts.click(display_set_elevator_nums_dialog);

//click event for distributing the lifts
const $elevatorPositionButton = $('.first-floor');
$elevatorPositionButton.click(elevators_position_all_one);

// click event for smart mode
const $enableAIModeButton = $('.smart-mode');
$enableAIModeButton.click(toggle_AI_mode);


function display_set_floor_nums_dialog() {
      swal(
          {
              title: 'Please set the number of floors',
              text: 'The number of floors is a number between 2-50 \n\nNote: If you use the zoom function of the browser, please set it back to 100% for normal use！',
              type: 'input',
              showCancelButton: true,
              closeOnConfirm: false,
              animation: 'slide-from-top',
              inputPlaceholder: 'Enter your desired number of floors here.'
          },
          function (inputValue) {
              if (inputValue === false) {
                  return false;
              }
              if (inputValue === '') {
                  swal.showInputError("Can't be blank");
                  return false;
              }
              var re = /^\+?[1-9][0-9]*$/s;
              if (!re.test(inputValue)) {
                  swal.showInputError('Please enter a legal positive integer!');
                  return false;
              }
              let value = parseInt(inputValue)
              console.log(value)
              if (value < 2 || value > 50) {
                  swal.showInputError('can not have value beyond 50')
                  return false;
              }
              //set_building_configs_and_rebuild(value, elevator_nums)
              swal(
                  'Nice!',
                  'Your number of floors has changed to: ' + value + '，A new elevator system has been generated!',
                  'success',
              )
          });
  }   
  