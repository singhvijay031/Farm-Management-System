// Add Staff form-----------------------------------------------------
function openSignUpForm() {
    // Code to open modal...
    $('#signupModal').show();
}

function closeModal1() {
    // Code to close modal...
    $('#signupModal').hide();
    // Clear the form and response message
    $('#signupForm')[0].reset();
    $('#responseMessage').empty();
}

$(document).ready(function() {
    $('#signupForm').submit(function(event) {
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: '_addStaff.php',
            data: $(this).serialize(),
            dataType: 'json',
            success: function(response) {
                if (response.status === 'success') {
                    // Display success message
                    alert(response.message);
                    location.reload();
                    // $('#responseMessage').html('<p style="color: blue; font-weight: bold;">' + response.message + '</p>');
                } else {
                    // Display error message
                    alert(response.message);
                    // $('#responseMessage').html('<p style="color: red; font-weight: bold;">' + response.message + '</p>');
                }
            }
        });
    });
});



// Update form - button-----------------------------------------------------------------

function openEditForm(userId) {
    // Code to open modal...
    $('#editModal').show();

    // Set the userId as a data attribute in the form
    $('#editForm').attr('data-user-id', userId); // Fix here

    // Populate the form fields with existing user data
    fetchUserData(userId);
}


// Function to fetch user data and populate the form fields
function fetchUserData(userId) {
    $.ajax({
        type: 'GET',
        url: '_getStaffInfo.php', 
        data: { userId: userId },
        dataType: 'json',
        success: function(response) {
            if (response.status === 'success') {
                // Populate the form fields with user data
                $('#editForm input[name="username"]').val(response.data.username);
            } else {
                console.error(response.message);
            }
        }
    });
}


// Function to close modal and clear form
function closeModal2() {
    // Code to close modal...
    $('#editModal').hide();
    // Clear the form and response message
    $('#editForm')[0].reset();
    $('#responseMessage').empty();
}


$(document).ready(function() {
    // Handle click events for the Edit buttons
    $('.editBtn').click(function() {
        var userId = $(this).data('user-id');
        openEditForm(userId);
    });

    // Handle click event for Save Changes button
    $('#saveChangesBtn').click(function() {
        submitEditForm();
    });

    // Handle form submission
    function submitEditForm() {
        // Get userId from the data attribute
        var userId = $('#editForm').data('user-id'); 

        $.ajax({
            type: 'POST',
            url: '_updateStaff.php',
            data: $('#editForm').serialize() + '&userId=' + userId,
            dataType: 'json',
            success: function(response) {
                if (response.status === 'success') {
                    // Display success message
                    // $('#responseMessage').html('<p style="color: blue; font-weight: bold;">' + response.message + '</p>');
                    alert(response.message);
                    location.reload();
                } else {
                    // Display error message
                    // $('#responseMessage').html('<p style="color: red; font-weight: bold;">' + response.message + '</p>');
                    alert(response.message);

                }
            }
        });
    }
});




// -----------Add image -----------------------------------


function openAddImageForm() {
    // Code to open modal or form...
    $('#addImageModal').show();
}

function closeAddImageForm() {
    // Code to close modal or form...
    $('#addImageModal').hide();
    // Clear the form and response message
    $('#addImageForm')[0].reset();
}






// TODO
// 1.Agi sammw add staff kam gardai thiyo with same code but now its submitting default...
// 2. userId ko data updatestaff sammw pugirako XPathExpression... 
