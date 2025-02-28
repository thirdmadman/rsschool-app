import { stageInterviewType } from 'domain/interview';
import { SessionProvider, ActiveCourseProvider } from 'modules/Course/contexts';
import { Feedback } from 'modules/Interviews/pages/feedback';
import { InterviewFeedback } from 'modules/Interviews/pages/InterviewFeedback';
import { getServerSideProps, PageProps } from 'modules/Interviews/pages/InterviewFeedback/getServerSideProps';
import { CourseRole } from 'services/models';

export { getServerSideProps };

export default function (props: PageProps) {
  return (
    <SessionProvider allowedRoles={[CourseRole.Mentor]} course={props.course}>
      <ActiveCourseProvider>
        {props.type === stageInterviewType ? <Feedback {...props} /> : <InterviewFeedback {...props} />}
      </ActiveCourseProvider>
    </SessionProvider>
  );
}
