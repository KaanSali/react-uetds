import IRole from '../Roles/IRole';

export default class YoneticiRole implements IRole {
	SeferKaydiEkle = true;
	YolculuklaraErisebilme = true;
	AraclaraErisebilme = true;
	SuruculereErisebilme = true;
	CariBilgilereErisme = true;
	UETDSGirisiYapabilme = true;
	SirketDuzenleme = true;
	RoleName = "Yönetici";
}
