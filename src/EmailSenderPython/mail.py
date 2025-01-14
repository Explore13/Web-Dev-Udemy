import cv2 # type: ignore
import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
import time

def capture_and_send_email():
    # Define sender's and recipient's email addresses
    sender_email = 'gamersurya169@gmail.com'
    recipient_emails = ['anupam.bhunia4086@gmail.com', 'tubai0553@gmail.com', 'suryaghosh169@gmail.com']  # List of recipient email addresses

    # Define sender's email login credentials
    sender_password = 'zbzi toez ipkn iawc'

    # Set up SMTP server
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(sender_email, sender_password)

    # Repeat the capture and send process 5 times
    for i in range(5):
        # Capture image from laptop camera
        cap = cv2.VideoCapture(0)
        ret, frame = cap.read()
        cap.release()

        # Save captured image to a temporary file
        image_path = 'captured_image{}.png'.format(i + 1)
        cv2.imwrite(image_path, frame)

        # Print the progress and image number
        print(f"Captured image {i + 1}")

        # Create email message
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = ', '.join(recipient_emails)  # Join recipient emails separated by commas
        msg['Subject'] = 'Image from Laptop Camera'

        body = 'Hello, Here is an image captured from the laptop camera.'
        msg.attach(MIMEText(body, 'plain'))

        # Attach captured image
        with open(image_path, 'rb') as attachment:
            img = MIMEImage(attachment.read())

        img.add_header('Content-Disposition', 'attachment', filename=f'captured_image{i + 1}.png')
        msg.attach(img)

        text = msg.as_string()

        # Send email
        server.sendmail(sender_email, recipient_emails, text)

        # Print the progress and image number
        print(f"Sent image {i + 1}")

        # Delete temporary image file
        os.remove(image_path)

        # Wait for 5 seconds before capturing the next image
        time.sleep(5)

    # Close SMTP connection
    server.quit()

if __name__ == "__main__":
    capture_and_send_email()
