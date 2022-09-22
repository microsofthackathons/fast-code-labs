import { DI, singleton } from '@microsoft/fast-element/di';
import { Serializer } from './serializer';

export interface Http {
  post<T = any>(url: string, request: any): Promise<T>;
  get<T = any>(url: string): Promise<T>;
}

@singleton
class HttpImpl implements Http {
  constructor(@Serializer private serializer: Serializer) {}

  async post<T>(url: string, request: any): Promise<T> {
    const response = await fetch(`api/${url}.json`, {
      method: 'GET',
    });

    return this.serializer.deserialize<T>(response);
  }

  async get<T>(url: string): Promise<T> {
    const response = await fetch(`api/${url}.json`, {
      method: 'GET',
    });

    return this.serializer.deserialize<T>(response);
  }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Http = DI.createInterface<Http>(x => x.singleton(HttpImpl));
