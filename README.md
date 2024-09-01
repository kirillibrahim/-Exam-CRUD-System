This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

Exam Management System
The Exam Management System is a web application that allows users to create, update, and manage exams. Each exam consists of multiple-choice questions, with each question having exactly one correct answer and at least two possible answers. The application is implemented using Next.js, with a focus on functionality.

Pages
1. Exam Editor Page
The Exam Editor Page enables users to create or update an exam. Here are the available actions within the form:

Add Question: Add a new question to the exam.
Edit Question: Allow users to edit the question title and description.
Remove Question: Delete an existing question from the exam.
Add Answer: Add a new answer to a question.
Edit Answer: Allow users to edit the answer title and description.
Delete Answer: Remove an answer from a question.
Make Answer Correct: Designate an answer as the correct choice for a question.
The submit button should be enabled only if the exam fields are valid, and there is at least one valid question.

After submitting:

The exam should be added to the list of exams stored in local storage.


2. List Exams Page
The List Exams Page displays a list of exams stored in local storage. Users can perform the following actions:

View Exams: Display a list of all exams with options to update each one. Clicking on an exam should link to the Exam Editor Page, populating the form with the current exam values.
Create New Exam: A button located in the top-right corner of the page allows users to create a new exam. This button should link to the Exam Editor Page with an empty form for entering new exam details.
UI and Functionality
UI: The UI design should prioritize functionality over aesthetics. Keep it simple and easy to use.

Tools and Frameworks:

1-Next.js: Use the Pages router (not the App router).
TailwindCSS (optional): For styling.
React Hook Form (optional): For form state management.
TypeScript: Use it for type safety.


You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
