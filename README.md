This is the website for EdComrade Educational System. 

### Onboarding & Admin

- `/onboard` – School onboarding form with logo upload
- `/admin/submissions` – Admin dashboard to review submissions

### Backend

- `POST /api/submissions/upload` – Upload logo to Cloudinary (multipart/form-data)
- `POST /api/submissions/create` – Create a submission (form-data)
- `GET /api/submissions` – List submissions

### Environment Variables

Create `.env.local`:

```bash
MONGODB_URI="mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority"
MONGODB_DB="edcomrade"

CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"

NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

### Install deps

```bash
sudo pnpm add mongoose cloudinary multer @types/multer
```
