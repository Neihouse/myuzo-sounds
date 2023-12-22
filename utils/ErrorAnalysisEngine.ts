export type ErrorLog = {
  code: string;
  description: string;
  component: string;
  dateEncountered: string;
};

export class ErrorAnalysisEngine {
  parseErrorLogs(): ErrorLog[] {
    const errorLogStorage = '[{"code":"ERR001","description":"Connection error","component":"Database","dateEncountered":"2023-04-01T12:00:00.000Z"}, {"code":"ERR002","description":"Timeout error","component":"API Gateway","dateEncountered":"2023-04-02T15:30:00.000Z"}]';
    const errorObjects = JSON.parse(errorLogStorage);
    return errorObjects.map((error: ErrorLog) => ({
      code: error.code,
      description: error.description,
      component: error.component,
      dateEncountered: error.dateEncountered,
    }));
  }
}