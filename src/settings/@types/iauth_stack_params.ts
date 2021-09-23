import { StackScreenProps } from "@react-navigation/stack";
import { IEstablishmentRegister } from "../../components/screens/register/interfaces";

export type IAuthStackParams = {
	Welcome: undefined;
	Register: undefined;
	Contract: IEstablishmentRegister;
	RegisterCode: IEstablishmentRegister;
	ForgetPassword: { mail: string };
	Login: undefined;
};

export type RegisterCodeScreenProps = StackScreenProps<IAuthStackParams, 'RegisterCode'>
export type ContractScreenProps = StackScreenProps<IAuthStackParams, 'Contract'>
export type ForgetPasswordScreenProps = StackScreenProps<IAuthStackParams, 'ForgetPassword'>
