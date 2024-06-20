import { Schema, model, Types } from "mongoose";

interface ICaracteristiques {
  annee: number;
  note: number;
  prix: number;
  disponibilite: string;
}

interface IFlipper {
  nom: string;
  marque_id: Types.ObjectId;
  caracteristiques: ICaracteristiques;
  images: string[];
}

const caracteristiquesSchema = new Schema<ICaracteristiques>({
  annee: { type: Number, required: true },
  note: { type: Number, required: true },
  prix: { type: Number, required: true },
  disponibilite: { type: String, required: true, trim: true },
});

const flipperSchema = new Schema<IFlipper>({
  nom: { type: String, required: true, trim: true },
  marque_id: { type: Schema.Types.ObjectId, required: true, ref: "Marque" },
  caracteristiques: { type: caracteristiquesSchema, required: true },
  images: { type: [String], required: true },
});

const Flipper = model<IFlipper>("Flipper", flipperSchema);
export { Flipper, IFlipper };
