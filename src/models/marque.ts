import { Schema, model, Types } from "mongoose";

interface IMarque {
  nom: string;
  pays: string;
  fondee_en: number;
}

const marqueSchema = new Schema<IMarque>({
  nom: { type: String, required: true, trim: true },
  pays: { type: String, required: true, trim: true },
  fondee_en: { type: Number, required: true },
});

const Marque = model<IMarque>("Marque", marqueSchema);
export { Marque, IMarque };
