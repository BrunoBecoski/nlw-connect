/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * NLW Connect
 * OpenAPI spec version: 0.0.1
 */
export type PostSubscriptionsBody = {
	name: string;
	email: string;
	/** @nullable */
	referrer?: string | null;
};

export type PostSubscriptions201 = {
	subscriberId: string;
};

/**
 * @nullable
 */
export type GetInvitesSubscriberId302 =
	| (typeof GetInvitesSubscriberId302)[keyof typeof GetInvitesSubscriberId302]
	| null;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetInvitesSubscriberId302 = {
	null: "null",
} as const;

export type GetSubscribersSubscriberIdRankingClicks200 = {
	count: number;
};

export type GetSubscribersSubscriberIdRankingCount200 = {
	count: number;
};

export type GetSubscribersSubscriberIdRankingPosition200 = {
	/** @nullable */
	position: number | null;
};

export type GetRanking200RankingItem = {
	id: string;
	name: string;
	score: number;
};

export type GetRanking200 = {
	ranking: GetRanking200RankingItem[];
};

/**
 * @summary Subscribes someone to the event
 */
export const getPostSubscriptionsUrl = () => {
	return `http://localhost:3333/subscriptions`;
};

export const postSubscriptions = async (
	postSubscriptionsBody: PostSubscriptionsBody,
	options?: RequestInit,
): Promise<PostSubscriptions201> => {
	const res = await fetch(getPostSubscriptionsUrl(), {
		...options,
		method: "POST",
		headers: { "Content-Type": "application/json", ...options?.headers },
		body: JSON.stringify(postSubscriptionsBody),
	});

	const body = [204, 205, 304].includes(res.status) ? null : await res.text();
	const data: PostSubscriptions201 = body ? JSON.parse(body) : {};

	return data;
};

/**
 * @summary Access invite link and redirects user
 */
export const getGetInvitesSubscriberIdUrl = (subscriberId: string) => {
	return `http://localhost:3333/invites/${subscriberId}`;
};

export const getInvitesSubscriberId = async (
	subscriberId: string,
	options?: RequestInit,
): Promise<unknown> => {
	const res = await fetch(getGetInvitesSubscriberIdUrl(subscriberId), {
		...options,
		method: "GET",
	});

	const body = [204, 205, 304].includes(res.status) ? null : await res.text();
	const data: unknown = body ? JSON.parse(body) : {};

	return data;
};

/**
 * @summary Get subscriber invite clicks count
 */
export const getGetSubscribersSubscriberIdRankingClicksUrl = (
	subscriberId: string,
) => {
	return `http://localhost:3333/subscribers/${subscriberId}/ranking/clicks`;
};

export const getSubscribersSubscriberIdRankingClicks = async (
	subscriberId: string,
	options?: RequestInit,
): Promise<GetSubscribersSubscriberIdRankingClicks200> => {
	const res = await fetch(
		getGetSubscribersSubscriberIdRankingClicksUrl(subscriberId),
		{
			...options,
			method: "GET",
		},
	);

	const body = [204, 205, 304].includes(res.status) ? null : await res.text();
	const data: GetSubscribersSubscriberIdRankingClicks200 = body
		? JSON.parse(body)
		: {};

	return data;
};

/**
 * @summary Get subscriber invites count
 */
export const getGetSubscribersSubscriberIdRankingCountUrl = (
	subscriberId: string,
) => {
	return `http://localhost:3333/subscribers/${subscriberId}/ranking/count`;
};

export const getSubscribersSubscriberIdRankingCount = async (
	subscriberId: string,
	options?: RequestInit,
): Promise<GetSubscribersSubscriberIdRankingCount200> => {
	const res = await fetch(
		getGetSubscribersSubscriberIdRankingCountUrl(subscriberId),
		{
			...options,
			method: "GET",
		},
	);

	const body = [204, 205, 304].includes(res.status) ? null : await res.text();
	const data: GetSubscribersSubscriberIdRankingCount200 = body
		? JSON.parse(body)
		: {};

	return data;
};

/**
 * @summary Get subscriber ranking position
 */
export const getGetSubscribersSubscriberIdRankingPositionUrl = (
	subscriberId: string,
) => {
	return `http://localhost:3333/subscribers/${subscriberId}/ranking/position`;
};

export const getSubscribersSubscriberIdRankingPosition = async (
	subscriberId: string,
	options?: RequestInit,
): Promise<GetSubscribersSubscriberIdRankingPosition200> => {
	const res = await fetch(
		getGetSubscribersSubscriberIdRankingPositionUrl(subscriberId),
		{
			...options,
			method: "GET",
		},
	);

	const body = [204, 205, 304].includes(res.status) ? null : await res.text();
	const data: GetSubscribersSubscriberIdRankingPosition200 = body
		? JSON.parse(body)
		: {};

	return data;
};

/**
 * @summary Get ranking
 */
export const getGetRankingUrl = () => {
	return `http://localhost:3333/ranking`;
};

export const getRanking = async (
	options?: RequestInit,
): Promise<GetRanking200> => {
	const res = await fetch(getGetRankingUrl(), {
		...options,
		method: "GET",
	});

	const body = [204, 205, 304].includes(res.status) ? null : await res.text();
	const data: GetRanking200 = body ? JSON.parse(body) : {};

	return data;
};
