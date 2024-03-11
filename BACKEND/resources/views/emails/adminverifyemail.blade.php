<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Change Password</title>
</head>
<body>
    <div style="display: flex;align-items: center; flex-direction: column">
        <h5>Hello!,{{ $mailData['name'] }}</h5>
        <p>You have requested to reset password.Your code is:</p>
        <p>{{ $mailData['token'] }}</p>
    </div>
</body>
</html>
