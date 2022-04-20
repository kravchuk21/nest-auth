import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

export interface IUser extends Document {
  email: string;
  fullName: string;
  username: string;
  password: string;
  confirmed: boolean;
  avatar: string;
  confirm_hash: string;
}

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: false })
  confirmed: boolean;

  @Prop()
  avatar: string;

  @Prop()
  confirm_hash: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
