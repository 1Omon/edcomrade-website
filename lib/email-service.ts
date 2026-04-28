import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { NotificationEmail } from '@/components/emails/notification';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_PORT === '465', 
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function sendNotificationEmail(type: 'submission' | 'contact', data: any) {
    const forwardTo = process.env.Email_forward || process.env.EMAIL_FORWARD;
    
    if (!forwardTo) {
        console.warn('Email_forward not set in .env. Skipping notification email.');
        return;
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.warn('SMTP credentials not set. Skipping notification email.');
        return;
    }

    try {
        const html = await render(NotificationEmail({ type, data }));

        const subject = type === 'submission' 
            ? `New School Application: ${data.schoolName}`
            : `New Contact Message: ${data.firstName} ${data.lastName || ''}`;

        await transporter.sendMail({
            from: `"EdComrade Notifications" <${process.env.SMTP_USER}>`,
            to: forwardTo,
            subject,
            html,
        });

        console.log(`Notification email sent to ${forwardTo}`);
    } catch (error) {
        console.error('Failed to send notification email:', error);
    }
}
