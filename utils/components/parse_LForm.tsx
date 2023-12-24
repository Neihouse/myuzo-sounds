import formidable from 'formidable';

export const parseForm = (req: unknown): Promise<formidable.Fields> => {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve(fields);
    });
  });
};
