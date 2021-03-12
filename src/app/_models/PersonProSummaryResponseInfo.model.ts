export interface PersonProSummaryResponseInfo {
    contact_information: {
      email: string;
      email_address: string;
      email_address_unlisted: boolean;
      mailing_address: string[];
      mailing_address_unlisted: boolean;
      mailing_phone: string;
      mailing_phone_unlisted: boolean;
      phone_number: string;
      work_address: string[];
      work_address_unlisted: boolean;
      work_phone: string;
      work_phone_unlisted: boolean
  };
  student_information?: {
      classes?: [
        { catalog_entry: string;
          instructor: string;
          teaching_area: string;
        },
      ],
      credit_hours?: string;
      student_role?: string;
      year_term?: string;
  };
  employee_information: {
      date_hired: {
          date: string;
          qualification: string;
          years_of_service: string;
      },
      department: string;
      employee_role: string;
      job_title: string;
      reportstoid: string;
      reportstoname: string;
  };
  personal_information: {
      age: number;
      citizenship: string;
      citizenship_code: string;
      date_of_birth: string;
      deceased: boolean;
      ethnicity: string;
      ethnicity_code: string;
      gender: string;
      gender_code: string;
      home_town: string;
      marital_status: string;
      marital_status_code: string;
      religion: string;
      religion_code: string;
      restricted_record: boolean;
  };
  names: {
      complete_name: string;
      preferred_name: string;
  };
  identifiers: {
      byu_id: string;
      byu_id_issue_number: number;
      net_id: string;
      person_id: string;
      ssn: string;
  };
  person_summary_line: {
      academic_record: boolean;
      is_employee: boolean;
      byu_id: string;
      deceased: boolean
      employee_role: string;
      merge_pending: boolean;
      name: string;
      net_id: string;
      non_person_organization: boolean;
      person_id: string;
      registrar_warning?: boolean;
      restricted?: boolean;
      student_role?: string;
  };
  }