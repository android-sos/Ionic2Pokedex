import {Pipe, PipeTransform} from 'angular2/core';

 
@Pipe({
	name: 'clientFilter',
	pure: false
})
export class ClientFilterPipe implements PipeTransform {
	transform(clients: any[], params: string[]) {
		if(clients == null) { return null; }
			let query = params[0].toLowerCase();
			return clients.filter(client =>
			client.name.toLowerCase().indexOf(query) > -1 ||
			client.address.name.toLowerCase().indexOf(query) > -1 ||
			client.address.addressLine1.toLowerCase().indexOf(query) > -1 ||
			client.address.town.toLowerCase().indexOf(query) > -1 ||
			client.address.postcode.toLowerCase().indexOf(query) > -1
		);
	}
}
