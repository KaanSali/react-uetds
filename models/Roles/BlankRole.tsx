import IRole from '../Roles/IRole';

export default class BlankRole implements IRole {
	SeferKaydiEkle = false;
	YolculuklaraErisebilme = false;
	AraclaraErisebilme = false;
	SuruculereErisebilme = false;
	CariBilgilereErisme = false;
	UETDSGirisiYapabilme = false;
	SirketDuzenleme = false;
	RoleName = "Blank";
}