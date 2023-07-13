import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class User {

    _id?: string;  //El id lo crea mongo por default

    @Prop({require:true, unique:true} )
    email: string;

    @Prop({require:true})
    name: string;

    @Prop({minlength:6})
    password?: string;

    @Prop({default:true})
    isActive: boolean;

    @Prop({ type: [String], default:['user']})
    roles: string[];


}


export const UserSchema = SchemaFactory.createForClass(User);