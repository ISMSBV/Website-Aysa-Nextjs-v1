import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

const mail = async (req: NextApiRequest, res: NextApiResponse) => {
  const messages = [
    {
      to: "info@ismsbv.nl",
      from: "ISMS B.V. <no-reply@ismsbv.nl>",
      templateId: "d-26787beca1244434abf0b5909d57fbc5",
      dynamicTemplateData: {
        subject: req.body.subject,
        message: req.body.message,
        name: req.body.fullname,
        email: req.body.email,
      },
    },
    {
      to: req.body.email,
      from: "ISMS B.V. <no-reply@ismsbv.nl>",
      templateId: "d-b20fd01d51e5491b863f0448f1f3f0e3",
    },
  ];

  await sendgrid
    .send(messages)
    .then(() =>
      res.status(200).json({ status: "Bericht is succesvol verzonden." })
    )
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: "Bericht kan niet worden verzonden." });
    });
};

export default mail;
