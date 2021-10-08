import { isEmpty } from './extensions/object_extensions';
export class Middlewares {

	static middlewareError(next: any, error: any) {
		if (!isEmpty(error)) { next() }
	}

}
