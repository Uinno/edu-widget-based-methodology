class HttpClient {
    baseUrl: string;
    transport: typeof window.fetch

    constructor(baseUrl: string, fetch: typeof window.fetch) {
        this.baseUrl = baseUrl
        this.transport = fetch.bind(window);
    }

    async get<T>(url: string) {
        const fullUrl = new URL(url, this.baseUrl);
        const request = new Request(fullUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const response = await this.transport(request)

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        return (await response.json()) as T;
    }

    async post<T, P extends any>(url: string, body: P) {
        const fullUrl = new URL(url, this.baseUrl);
        const request = new Request(fullUrl, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const response = await this.transport(request)

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        return (await response.json()) as T;
    }


    async put<T, P extends any = {}>(url: string, body: P) {
        const fullUrl = new URL(url, this.baseUrl);
        const response = await this.transport(fullUrl, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        return (await response.json()) as T;
    }


    async delete<T>(url: string) {
        const fullUrl = new URL(url, this.baseUrl);
        const request = new Request(fullUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const response = await this.transport(request)

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        return (await response.json()) as T;
    }
}

export const
    httpClient = new HttpClient('http://localhost:3000', fetch)
