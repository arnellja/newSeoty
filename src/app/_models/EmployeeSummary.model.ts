export interface EmployeeSummary {
    values: [
      {
        account_field: {
          api_type: string;
          description: string;
          display_label: string;
          value: string;
        };
        byu_id: {
          api_type: string;
          display_label: string;
          key: boolean;
          related_resource: string;
          value: string;
        };
        chartblock: {
          api_type: string;
          display_label: string;
          value: string;
        };
        _class: {
          api_type: string;
          description: string;
          display_label: string;
          value: string;
        };
        department: {
          api_type: string;
          description: string;
          display_label: string;
          domain: string;
          value: string;
        };
        division_id: {
          api_type: string;
          description: string;
          display_label: string;
          domain: string;
          value: string;
        };
        effective_date: {
          api_type: string;
          display_label: string;
          key: boolean;
          value: string;
        };
        effective_sequence: {
          api_type: string;
          display_label: string;
          key: boolean;
          value: string;
        };
        empl_status: {
          api_type: string;
          description: string;
          display_label: string;
          domain: string;
          value: string;
        };
        employee_category: {
          api_type: string;
          description: string;
          display_label: string;
          domain: string;
          value: string;
        };
        employee_classification: {
          api_type: string;
          description: string;
          display_label: string;
          domain: string;
          value: string;
        };
        employee_group: {
          api_type: string;
          description: string;
          display_label: string;
          domain: string;
          value: string;
        };
        employee_record_number: {
          api_type: string;
          display_label: string;
          key: boolean;
          value: string;
        };
        employee_standing: {
          api_type: string;
          description: string;
          display_label: string;
          domain: string;
          value: string;
        };
        employee_status: {
          api_type: string;
          description: string;
          display_label: string;
          domain: string;
          value: string;
        };
        employee_workgroup: {
          api_type: string;
          display_label: string;
          value: string;
        };
        employment_action: {
          api_type: string;
          description: string;
          display_label: string;
          value: string;
        };
        full_part_time: {
          api_type: string;
          description: string;
          display_label: string;
          domain: string;
          value: string;
        };
        hire_date: {
          api_type: string;
          display_label: string;
          value: string;
        };
        hr_empl_class_code: {
          api_type: string;
          description: string;
          display_label: string;
          domain: string;
          long_description: string;
          value: string;
        };
        hr_status: {
          api_type: string;
          description: string;
          display_label: string;
          domain: string;
          value: string;
        };
        job_code: {
          api_type: string;
          description: string;
          display_label: string;
          domain: string;
          value: string;
        };
        last_date_worked: {
          api_type: string;
          display_label: string;
          value: string;
        };
        last_hire_date: {
          api_type: string;
          display_label: string;
          value: string;
        };
        metadata: {
            validation_response: {
              code: number;
              message: string;
            }
        };
        months_ft_service: {
          api_type: string;
          display_label: string;
          value: string;
        };
        net_id: {
          api_type: string;
          display_label: string;
          related_resource: string;
          value: string;
        };
        operating_unit: {
          api_type: string;
          description: string;
          display_label: string;
          value: string;
        };
        position_number: {
          api_type: string;
          description: string;
          display_label: string;
          domain: string;
          value: string;
        };
        regular_temp: {
          api_type: string;
          description: string;
          display_label: string;
          domain: string;
          value: string;
        };
        reports_to: {
            byu_id: {
              api_type: string;
              display_label: string;
              key: boolean;
              related_resource: string;
              value: string;
            };
            first_name: {
              api_type: string;
              display_label: string;
              related_resource: string;
              value: string;
            };
            middle_name: {
              api_type: string;
              display_label: string;
              related_resource: string;
              value: string;
            };
            surname: {
              api_type: string;
              display_label: string;
              related_resource: string;
              value: string;
            }
        };
        termination_date?: {
          api_type: string;
          display_label: string;
          value: string;
        }
    }]
  }