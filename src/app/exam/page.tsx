"use client"

import { usePathname  } from 'next/navigation';
import ExamEditor from '../../components/ExamEditor';
import { useEffect, useState } from 'react';
import { Exam } from '../../constants/types';
import { getExamByIdFromLocalStorage } from '../../utils/localStorageUtils';

const ExamEditorPage = () => {
  const router = usePathname ();
  const  id  = router; // Exam ID from query parameter
  const [initialExam, setInitialExam] = useState<Exam | undefined>(undefined);

  useEffect(() => {
    if (id) {
      const exam = getExamByIdFromLocalStorage(id as string);
      setInitialExam(exam);
    }
  }, [id]);

  return (
    <div className="container mx-auto p-6">
    
      <ExamEditor initialExam={initialExam} />
    </div>
  );
};

export default ExamEditorPage;
