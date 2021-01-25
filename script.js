// Function Definitions
function $(id) {
  return document.getElementById(id);
}

window.onload = function () {
  // On Click Event Handler for '+' Button
  $('input_add_button').onclick = function () {
    // Local Variables
    let sectionListHTML = $('section_list').innerHTML;
    let inputWidth = parseInt($('input_width').value);
    let inputHeight = parseInt($('input_height').value);
    let inputDiagonal = parseFloat($('input_diagonal').value);
    let inputNickname = $('input_nickname').value;
    let aspectRatio = [];
    let widthInInches,
      heightInInches,
      widthInMillimeters,
      heightInMillimeters,
      pixelsPerInch = 0;
    // End: Local Variables

    // Data Validation
    if (isNaN(inputWidth) || isNaN(inputHeight) || isNaN(inputDiagonal)) {
      return;
    }
    // End: Data Validation

    // Calculations
    aspectRatio[0] = inputWidth / math.gcd(inputWidth, inputHeight);
    aspectRatio[1] = inputHeight / math.gcd(inputWidth, inputHeight);
    widthInInches =
      aspectRatio[0] *
      Math.sqrt(Math.pow(inputDiagonal, 2) / (Math.pow(aspectRatio[0], 2) + Math.pow(aspectRatio[1], 2)));
    heightInInches =
      aspectRatio[1] *
      Math.sqrt(Math.pow(inputDiagonal, 2) / (Math.pow(aspectRatio[0], 2) + Math.pow(aspectRatio[1], 2)));
    widthInMillimeters = 25.4 * widthInInches;
    heightInMillimeters = 25.4 * heightInInches;
    pixelsPerInch = Math.sqrt((inputWidth * inputHeight) / (widthInInches * heightInInches));
    // End: Calculations

    // Create the HTML element using string concatenation
    sectionListHTML += `<div class="list_card flex-fill px-2 mb-3"><div class="card mdl-shadow--2dp"><div class="card-header"><h5 class="d-inline-block m-0">`;
    sectionListHTML += inputNickname;
    sectionListHTML += `</h5><button class="list_close_button mdl-button mdl-js-button"><i class="material-icons">close</i></button><button class="list_amazon_button mdl-button mdl-js-button"><i class="material-icons">shop</i></button></div><div class="card-body"><table class="table table-borderless table-sm mb-0"><col class="card_column_left" /><col class="card_column_right" /><tbody><tr><th scope="row">Diagonal (in)</th><td id="card_inches_template1">`;
    sectionListHTML += inputDiagonal;
    sectionListHTML += `</td></tr><tr><th scope="row">Resolution</th><td id="card_resolution_template1">`;
    sectionListHTML += inputWidth + ' × ' + inputHeight;
    sectionListHTML += `</td></tr><tr><th scope="row">Size (mm)</th><td id="card_sizeMM_template1">`;
    sectionListHTML += widthInMillimeters.toFixed(1) + ' × ' + heightInMillimeters.toFixed(1);
    sectionListHTML += `</td></tr><tr><th scope="row">Size (in)</th><td id="card_sizeIN_template1">`;
    sectionListHTML += widthInInches.toFixed(1) + ' × ' + heightInInches.toFixed(1);
    sectionListHTML += `</td></tr><tr><th scope="row">Aspect Ratio</th><td id="card_aspect_template1">`;
    sectionListHTML += aspectRatio[0] + ':' + aspectRatio[1];
    sectionListHTML += `</td></tr><tr><th scope="row">PPI</th><td id="card_template1">`;
    sectionListHTML += pixelsPerInch.toFixed(1);
    sectionListHTML += `</td></tr></tbody></table></div></div></div>`;
    $('section_list').innerHTML = sectionListHTML;
    // End: Create the HTML element using string concatenation
  };
};
