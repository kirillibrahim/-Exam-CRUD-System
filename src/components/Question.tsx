import { Controller } from 'react-hook-form';
import AnswersSection from './AnswersSection';

interface QuestionProps {
  control: any;
  questionIndex: number;
  removeQuestion: (index: number) => void;
}

const Question = ({ control, questionIndex, removeQuestion }: QuestionProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50">
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Question Title</label>
        <Controller
          name={`questions.${questionIndex}.title`}
          control={control}
          render={({ field }) => <input {...field} className="border-gray-300 border rounded-md p-2 w-full" />}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Question Description</label>
        <Controller
          name={`questions.${questionIndex}.description`}
          control={control}
          render={({ field }) => <textarea {...field} className="border-gray-300 border rounded-md p-2 w-full h-24" />}
        />
      </div>

      <AnswersSection control={control} questionIndex={questionIndex} />

      <button
        type="button"
        onClick={() => removeQuestion(questionIndex)}
        className="text-red-500 underline mt-4"
      >
        Remove Question
      </button>
    </div>
  );
};

export default Question;
