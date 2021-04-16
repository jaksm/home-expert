import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};










export type _AddUserReviewsPayload = {
  __typename?: '_AddUserReviewsPayload';
  /** Field for the User node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<User>;
  /** Field for the Review node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Review>;
};

export type _RemoveUserReviewsPayload = {
  __typename?: '_RemoveUserReviewsPayload';
  /** Field for the User node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<User>;
  /** Field for the Review node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Review>;
};

export type _MergeUserReviewsPayload = {
  __typename?: '_MergeUserReviewsPayload';
  /** Field for the User node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<User>;
  /** Field for the Review node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Review>;
};

export type _UserInput = {
  userId: Scalars['ID'];
};

export enum _UserOrdering {
  UserIdAsc = 'userId_asc',
  UserIdDesc = 'userId_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  AvgStarsAsc = 'avgStars_asc',
  AvgStarsDesc = 'avgStars_desc',
  NumReviewsAsc = 'numReviews_asc',
  NumReviewsDesc = 'numReviews_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _UserFilter = {
  AND: Maybe<Array<_UserFilter>>;
  OR: Maybe<Array<_UserFilter>>;
  userId: Maybe<Scalars['ID']>;
  userId_not: Maybe<Scalars['ID']>;
  userId_in: Maybe<Array<Scalars['ID']>>;
  userId_not_in: Maybe<Array<Scalars['ID']>>;
  userId_regexp: Maybe<Scalars['ID']>;
  userId_contains: Maybe<Scalars['ID']>;
  userId_not_contains: Maybe<Scalars['ID']>;
  userId_starts_with: Maybe<Scalars['ID']>;
  userId_not_starts_with: Maybe<Scalars['ID']>;
  userId_ends_with: Maybe<Scalars['ID']>;
  userId_not_ends_with: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  name_not: Maybe<Scalars['String']>;
  name_in: Maybe<Array<Scalars['String']>>;
  name_not_in: Maybe<Array<Scalars['String']>>;
  name_regexp: Maybe<Scalars['String']>;
  name_contains: Maybe<Scalars['String']>;
  name_not_contains: Maybe<Scalars['String']>;
  name_starts_with: Maybe<Scalars['String']>;
  name_not_starts_with: Maybe<Scalars['String']>;
  name_ends_with: Maybe<Scalars['String']>;
  name_not_ends_with: Maybe<Scalars['String']>;
  reviews: Maybe<_ReviewFilter>;
  reviews_not: Maybe<_ReviewFilter>;
  reviews_in: Maybe<Array<_ReviewFilter>>;
  reviews_not_in: Maybe<Array<_ReviewFilter>>;
  reviews_some: Maybe<_ReviewFilter>;
  reviews_none: Maybe<_ReviewFilter>;
  reviews_single: Maybe<_ReviewFilter>;
  reviews_every: Maybe<_ReviewFilter>;
};

export type User = {
  __typename?: 'User';
  userId: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  reviews: Maybe<Array<Maybe<Review>>>;
  avgStars: Maybe<Scalars['Float']>;
  numReviews: Maybe<Scalars['Int']>;
  recommendations: Maybe<Array<Maybe<Business>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id: Maybe<Scalars['String']>;
};


export type UserReviewsArgs = {
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_ReviewOrdering>>>;
  filter: Maybe<_ReviewFilter>;
};


export type UserRecommendationsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_BusinessOrdering>>>;
};

export type _AddBusinessReviewsPayload = {
  __typename?: '_AddBusinessReviewsPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<Review>;
  /** Field for the Business node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Business>;
};

export type _RemoveBusinessReviewsPayload = {
  __typename?: '_RemoveBusinessReviewsPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<Review>;
  /** Field for the Business node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Business>;
};

export type _MergeBusinessReviewsPayload = {
  __typename?: '_MergeBusinessReviewsPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<Review>;
  /** Field for the Business node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Business>;
};

export type _AddBusinessCategoriesPayload = {
  __typename?: '_AddBusinessCategoriesPayload';
  /** Field for the Business node this IN_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<Business>;
  /** Field for the Category node this IN_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Category>;
};

export type _RemoveBusinessCategoriesPayload = {
  __typename?: '_RemoveBusinessCategoriesPayload';
  /** Field for the Business node this IN_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<Business>;
  /** Field for the Category node this IN_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Category>;
};

export type _MergeBusinessCategoriesPayload = {
  __typename?: '_MergeBusinessCategoriesPayload';
  /** Field for the Business node this IN_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<Business>;
  /** Field for the Category node this IN_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Category>;
};

export type _BusinessInput = {
  businessId: Scalars['ID'];
};

export enum _BusinessOrdering {
  BusinessIdAsc = 'businessId_asc',
  BusinessIdDesc = 'businessId_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  AddressAsc = 'address_asc',
  AddressDesc = 'address_desc',
  CityAsc = 'city_asc',
  CityDesc = 'city_desc',
  StateAsc = 'state_asc',
  StateDesc = 'state_desc',
  AvgStarsAsc = 'avgStars_asc',
  AvgStarsDesc = 'avgStars_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _BusinessFilter = {
  AND: Maybe<Array<_BusinessFilter>>;
  OR: Maybe<Array<_BusinessFilter>>;
  businessId: Maybe<Scalars['ID']>;
  businessId_not: Maybe<Scalars['ID']>;
  businessId_in: Maybe<Array<Scalars['ID']>>;
  businessId_not_in: Maybe<Array<Scalars['ID']>>;
  businessId_regexp: Maybe<Scalars['ID']>;
  businessId_contains: Maybe<Scalars['ID']>;
  businessId_not_contains: Maybe<Scalars['ID']>;
  businessId_starts_with: Maybe<Scalars['ID']>;
  businessId_not_starts_with: Maybe<Scalars['ID']>;
  businessId_ends_with: Maybe<Scalars['ID']>;
  businessId_not_ends_with: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  name_not: Maybe<Scalars['String']>;
  name_in: Maybe<Array<Scalars['String']>>;
  name_not_in: Maybe<Array<Scalars['String']>>;
  name_regexp: Maybe<Scalars['String']>;
  name_contains: Maybe<Scalars['String']>;
  name_not_contains: Maybe<Scalars['String']>;
  name_starts_with: Maybe<Scalars['String']>;
  name_not_starts_with: Maybe<Scalars['String']>;
  name_ends_with: Maybe<Scalars['String']>;
  name_not_ends_with: Maybe<Scalars['String']>;
  address: Maybe<Scalars['String']>;
  address_not: Maybe<Scalars['String']>;
  address_in: Maybe<Array<Scalars['String']>>;
  address_not_in: Maybe<Array<Scalars['String']>>;
  address_regexp: Maybe<Scalars['String']>;
  address_contains: Maybe<Scalars['String']>;
  address_not_contains: Maybe<Scalars['String']>;
  address_starts_with: Maybe<Scalars['String']>;
  address_not_starts_with: Maybe<Scalars['String']>;
  address_ends_with: Maybe<Scalars['String']>;
  address_not_ends_with: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  city_not: Maybe<Scalars['String']>;
  city_in: Maybe<Array<Scalars['String']>>;
  city_not_in: Maybe<Array<Scalars['String']>>;
  city_regexp: Maybe<Scalars['String']>;
  city_contains: Maybe<Scalars['String']>;
  city_not_contains: Maybe<Scalars['String']>;
  city_starts_with: Maybe<Scalars['String']>;
  city_not_starts_with: Maybe<Scalars['String']>;
  city_ends_with: Maybe<Scalars['String']>;
  city_not_ends_with: Maybe<Scalars['String']>;
  state: Maybe<Scalars['String']>;
  state_not: Maybe<Scalars['String']>;
  state_in: Maybe<Array<Scalars['String']>>;
  state_not_in: Maybe<Array<Scalars['String']>>;
  state_regexp: Maybe<Scalars['String']>;
  state_contains: Maybe<Scalars['String']>;
  state_not_contains: Maybe<Scalars['String']>;
  state_starts_with: Maybe<Scalars['String']>;
  state_not_starts_with: Maybe<Scalars['String']>;
  state_ends_with: Maybe<Scalars['String']>;
  state_not_ends_with: Maybe<Scalars['String']>;
  location: Maybe<_Neo4jPointInput>;
  location_not: Maybe<_Neo4jPointInput>;
  location_distance: Maybe<_Neo4jPointDistanceFilter>;
  location_distance_lt: Maybe<_Neo4jPointDistanceFilter>;
  location_distance_lte: Maybe<_Neo4jPointDistanceFilter>;
  location_distance_gt: Maybe<_Neo4jPointDistanceFilter>;
  location_distance_gte: Maybe<_Neo4jPointDistanceFilter>;
  reviews: Maybe<_ReviewFilter>;
  reviews_not: Maybe<_ReviewFilter>;
  reviews_in: Maybe<Array<_ReviewFilter>>;
  reviews_not_in: Maybe<Array<_ReviewFilter>>;
  reviews_some: Maybe<_ReviewFilter>;
  reviews_none: Maybe<_ReviewFilter>;
  reviews_single: Maybe<_ReviewFilter>;
  reviews_every: Maybe<_ReviewFilter>;
  categories: Maybe<_CategoryFilter>;
  categories_not: Maybe<_CategoryFilter>;
  categories_in: Maybe<Array<_CategoryFilter>>;
  categories_not_in: Maybe<Array<_CategoryFilter>>;
  categories_some: Maybe<_CategoryFilter>;
  categories_none: Maybe<_CategoryFilter>;
  categories_single: Maybe<_CategoryFilter>;
  categories_every: Maybe<_CategoryFilter>;
};

export type Business = {
  __typename?: 'Business';
  businessId: Scalars['ID'];
  name: Scalars['String'];
  address: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  state: Maybe<Scalars['String']>;
  location: Maybe<_Neo4jPoint>;
  avgStars: Maybe<Scalars['Float']>;
  reviews: Maybe<Array<Maybe<Review>>>;
  categories: Maybe<Array<Maybe<Category>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id: Maybe<Scalars['String']>;
};


export type BusinessReviewsArgs = {
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_ReviewOrdering>>>;
  filter: Maybe<_ReviewFilter>;
};


export type BusinessCategoriesArgs = {
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_CategoryOrdering>>>;
  filter: Maybe<_CategoryFilter>;
};

export type _AddReviewBusinessPayload = {
  __typename?: '_AddReviewBusinessPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<Review>;
  /** Field for the Business node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Business>;
};

export type _RemoveReviewBusinessPayload = {
  __typename?: '_RemoveReviewBusinessPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<Review>;
  /** Field for the Business node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Business>;
};

export type _MergeReviewBusinessPayload = {
  __typename?: '_MergeReviewBusinessPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<Review>;
  /** Field for the Business node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Business>;
};

export type _AddReviewUserPayload = {
  __typename?: '_AddReviewUserPayload';
  /** Field for the User node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<User>;
  /** Field for the Review node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Review>;
};

export type _RemoveReviewUserPayload = {
  __typename?: '_RemoveReviewUserPayload';
  /** Field for the User node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<User>;
  /** Field for the Review node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Review>;
};

export type _MergeReviewUserPayload = {
  __typename?: '_MergeReviewUserPayload';
  /** Field for the User node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<User>;
  /** Field for the Review node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Review>;
};

export type _ReviewInput = {
  reviewId: Scalars['ID'];
};

export enum _ReviewOrdering {
  ReviewIdAsc = 'reviewId_asc',
  ReviewIdDesc = 'reviewId_desc',
  StarsAsc = 'stars_asc',
  StarsDesc = 'stars_desc',
  TextAsc = 'text_asc',
  TextDesc = 'text_desc',
  DateAsc = 'date_asc',
  DateDesc = 'date_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _ReviewFilter = {
  AND: Maybe<Array<_ReviewFilter>>;
  OR: Maybe<Array<_ReviewFilter>>;
  reviewId: Maybe<Scalars['ID']>;
  reviewId_not: Maybe<Scalars['ID']>;
  reviewId_in: Maybe<Array<Scalars['ID']>>;
  reviewId_not_in: Maybe<Array<Scalars['ID']>>;
  reviewId_regexp: Maybe<Scalars['ID']>;
  reviewId_contains: Maybe<Scalars['ID']>;
  reviewId_not_contains: Maybe<Scalars['ID']>;
  reviewId_starts_with: Maybe<Scalars['ID']>;
  reviewId_not_starts_with: Maybe<Scalars['ID']>;
  reviewId_ends_with: Maybe<Scalars['ID']>;
  reviewId_not_ends_with: Maybe<Scalars['ID']>;
  stars: Maybe<Scalars['Float']>;
  stars_not: Maybe<Scalars['Float']>;
  stars_in: Maybe<Array<Scalars['Float']>>;
  stars_not_in: Maybe<Array<Scalars['Float']>>;
  stars_lt: Maybe<Scalars['Float']>;
  stars_lte: Maybe<Scalars['Float']>;
  stars_gt: Maybe<Scalars['Float']>;
  stars_gte: Maybe<Scalars['Float']>;
  text: Maybe<Scalars['String']>;
  text_not: Maybe<Scalars['String']>;
  text_in: Maybe<Array<Scalars['String']>>;
  text_not_in: Maybe<Array<Scalars['String']>>;
  text_regexp: Maybe<Scalars['String']>;
  text_contains: Maybe<Scalars['String']>;
  text_not_contains: Maybe<Scalars['String']>;
  text_starts_with: Maybe<Scalars['String']>;
  text_not_starts_with: Maybe<Scalars['String']>;
  text_ends_with: Maybe<Scalars['String']>;
  text_not_ends_with: Maybe<Scalars['String']>;
  date: Maybe<_Neo4jDateInput>;
  date_not: Maybe<_Neo4jDateInput>;
  date_in: Maybe<Array<_Neo4jDateInput>>;
  date_not_in: Maybe<Array<_Neo4jDateInput>>;
  date_lt: Maybe<_Neo4jDateInput>;
  date_lte: Maybe<_Neo4jDateInput>;
  date_gt: Maybe<_Neo4jDateInput>;
  date_gte: Maybe<_Neo4jDateInput>;
  business: Maybe<_BusinessFilter>;
  business_not: Maybe<_BusinessFilter>;
  business_in: Maybe<Array<_BusinessFilter>>;
  business_not_in: Maybe<Array<_BusinessFilter>>;
  user: Maybe<_UserFilter>;
  user_not: Maybe<_UserFilter>;
  user_in: Maybe<Array<_UserFilter>>;
  user_not_in: Maybe<Array<_UserFilter>>;
};

export type Review = {
  __typename?: 'Review';
  reviewId: Scalars['ID'];
  stars: Maybe<Scalars['Float']>;
  text: Maybe<Scalars['String']>;
  date: Maybe<_Neo4jDate>;
  business: Maybe<Business>;
  user: Maybe<User>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id: Maybe<Scalars['String']>;
};


export type ReviewBusinessArgs = {
  filter: Maybe<_BusinessFilter>;
};


export type ReviewUserArgs = {
  filter: Maybe<_UserFilter>;
};

export type _AddCategoryBusinessesPayload = {
  __typename?: '_AddCategoryBusinessesPayload';
  /** Field for the Business node this IN_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<Business>;
  /** Field for the Category node this IN_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Category>;
};

export type _RemoveCategoryBusinessesPayload = {
  __typename?: '_RemoveCategoryBusinessesPayload';
  /** Field for the Business node this IN_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<Business>;
  /** Field for the Category node this IN_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Category>;
};

export type _MergeCategoryBusinessesPayload = {
  __typename?: '_MergeCategoryBusinessesPayload';
  /** Field for the Business node this IN_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<Business>;
  /** Field for the Category node this IN_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Category>;
};

export type _CategoryInput = {
  name: Scalars['ID'];
};

export enum _CategoryOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _CategoryFilter = {
  AND: Maybe<Array<_CategoryFilter>>;
  OR: Maybe<Array<_CategoryFilter>>;
  name: Maybe<Scalars['ID']>;
  name_not: Maybe<Scalars['ID']>;
  name_in: Maybe<Array<Scalars['ID']>>;
  name_not_in: Maybe<Array<Scalars['ID']>>;
  name_regexp: Maybe<Scalars['ID']>;
  name_contains: Maybe<Scalars['ID']>;
  name_not_contains: Maybe<Scalars['ID']>;
  name_starts_with: Maybe<Scalars['ID']>;
  name_not_starts_with: Maybe<Scalars['ID']>;
  name_ends_with: Maybe<Scalars['ID']>;
  name_not_ends_with: Maybe<Scalars['ID']>;
  businesses: Maybe<_BusinessFilter>;
  businesses_not: Maybe<_BusinessFilter>;
  businesses_in: Maybe<Array<_BusinessFilter>>;
  businesses_not_in: Maybe<Array<_BusinessFilter>>;
  businesses_some: Maybe<_BusinessFilter>;
  businesses_none: Maybe<_BusinessFilter>;
  businesses_single: Maybe<_BusinessFilter>;
  businesses_every: Maybe<_BusinessFilter>;
};

export type Category = {
  __typename?: 'Category';
  name: Scalars['ID'];
  businesses: Maybe<Array<Maybe<Business>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id: Maybe<Scalars['String']>;
};


export type CategoryBusinessesArgs = {
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_BusinessOrdering>>>;
  filter: Maybe<_BusinessFilter>;
};

export type RatingCount = {
  __typename?: 'RatingCount';
  stars: Scalars['Float'];
  count: Scalars['Int'];
};

/** Generated Time input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jTimeInput = {
  hour: Maybe<Scalars['Int']>;
  minute: Maybe<Scalars['Int']>;
  second: Maybe<Scalars['Int']>;
  millisecond: Maybe<Scalars['Int']>;
  microsecond: Maybe<Scalars['Int']>;
  nanosecond: Maybe<Scalars['Int']>;
  timezone: Maybe<Scalars['String']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) Time value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/time/#functions-time-create-string). */
  formatted: Maybe<Scalars['String']>;
};

/** Generated Time object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jTime = {
  __typename?: '_Neo4jTime';
  hour: Maybe<Scalars['Int']>;
  minute: Maybe<Scalars['Int']>;
  second: Maybe<Scalars['Int']>;
  millisecond: Maybe<Scalars['Int']>;
  microsecond: Maybe<Scalars['Int']>;
  nanosecond: Maybe<Scalars['Int']>;
  timezone: Maybe<Scalars['String']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) Time value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted: Maybe<Scalars['String']>;
};

/** Generated Date input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jDateInput = {
  year: Maybe<Scalars['Int']>;
  month: Maybe<Scalars['Int']>;
  day: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) Date value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/date/#functions-date-create-string). */
  formatted: Maybe<Scalars['String']>;
};

/** Generated Date object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jDate = {
  __typename?: '_Neo4jDate';
  year: Maybe<Scalars['Int']>;
  month: Maybe<Scalars['Int']>;
  day: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) Date value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted: Maybe<Scalars['String']>;
};

/** Generated DateTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jDateTimeInput = {
  year: Maybe<Scalars['Int']>;
  month: Maybe<Scalars['Int']>;
  day: Maybe<Scalars['Int']>;
  hour: Maybe<Scalars['Int']>;
  minute: Maybe<Scalars['Int']>;
  second: Maybe<Scalars['Int']>;
  millisecond: Maybe<Scalars['Int']>;
  microsecond: Maybe<Scalars['Int']>;
  nanosecond: Maybe<Scalars['Int']>;
  timezone: Maybe<Scalars['String']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) DateTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/datetime/#functions-datetime-create-string). */
  formatted: Maybe<Scalars['String']>;
};

/** Generated DateTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jDateTime = {
  __typename?: '_Neo4jDateTime';
  year: Maybe<Scalars['Int']>;
  month: Maybe<Scalars['Int']>;
  day: Maybe<Scalars['Int']>;
  hour: Maybe<Scalars['Int']>;
  minute: Maybe<Scalars['Int']>;
  second: Maybe<Scalars['Int']>;
  millisecond: Maybe<Scalars['Int']>;
  microsecond: Maybe<Scalars['Int']>;
  nanosecond: Maybe<Scalars['Int']>;
  timezone: Maybe<Scalars['String']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) DateTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted: Maybe<Scalars['String']>;
};

/** Generated LocalTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jLocalTimeInput = {
  hour: Maybe<Scalars['Int']>;
  minute: Maybe<Scalars['Int']>;
  second: Maybe<Scalars['Int']>;
  millisecond: Maybe<Scalars['Int']>;
  microsecond: Maybe<Scalars['Int']>;
  nanosecond: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) LocalTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/localtime/#functions-localtime-create-string). */
  formatted: Maybe<Scalars['String']>;
};

/** Generated LocalTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jLocalTime = {
  __typename?: '_Neo4jLocalTime';
  hour: Maybe<Scalars['Int']>;
  minute: Maybe<Scalars['Int']>;
  second: Maybe<Scalars['Int']>;
  millisecond: Maybe<Scalars['Int']>;
  microsecond: Maybe<Scalars['Int']>;
  nanosecond: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) LocalTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted: Maybe<Scalars['String']>;
};

/** Generated LocalDateTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jLocalDateTimeInput = {
  year: Maybe<Scalars['Int']>;
  month: Maybe<Scalars['Int']>;
  day: Maybe<Scalars['Int']>;
  hour: Maybe<Scalars['Int']>;
  minute: Maybe<Scalars['Int']>;
  second: Maybe<Scalars['Int']>;
  millisecond: Maybe<Scalars['Int']>;
  microsecond: Maybe<Scalars['Int']>;
  nanosecond: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) LocalDateTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/localdatetime/#functions-localdatetime-create-string). */
  formatted: Maybe<Scalars['String']>;
};

/** Generated LocalDateTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jLocalDateTime = {
  __typename?: '_Neo4jLocalDateTime';
  year: Maybe<Scalars['Int']>;
  month: Maybe<Scalars['Int']>;
  day: Maybe<Scalars['Int']>;
  hour: Maybe<Scalars['Int']>;
  minute: Maybe<Scalars['Int']>;
  second: Maybe<Scalars['Int']>;
  millisecond: Maybe<Scalars['Int']>;
  microsecond: Maybe<Scalars['Int']>;
  nanosecond: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) LocalDateTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted: Maybe<Scalars['String']>;
};

export type _Neo4jPointDistanceFilter = {
  point: _Neo4jPointInput;
  distance: Scalars['Float'];
};

/** Generated Point input object for Neo4j [Spatial field arguments](https://grandstack.io/docs/graphql-spatial-types/#point-query-arguments). */
export type _Neo4jPointInput = {
  x: Maybe<Scalars['Float']>;
  y: Maybe<Scalars['Float']>;
  z: Maybe<Scalars['Float']>;
  longitude: Maybe<Scalars['Float']>;
  latitude: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Float']>;
  crs: Maybe<Scalars['String']>;
  srid: Maybe<Scalars['Int']>;
};

/** Generated Point object type for Neo4j [Spatial fields](https://grandstack.io/docs/graphql-spatial-types#using-point-in-queries). */
export type _Neo4jPoint = {
  __typename?: '_Neo4jPoint';
  x: Maybe<Scalars['Float']>;
  y: Maybe<Scalars['Float']>;
  z: Maybe<Scalars['Float']>;
  longitude: Maybe<Scalars['Float']>;
  latitude: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Float']>;
  crs: Maybe<Scalars['String']>;
  srid: Maybe<Scalars['Int']>;
};

export enum _RelationDirections {
  In = 'IN',
  Out = 'OUT'
}

export type Mutation = {
  __typename?: 'Mutation';
  mergeBusinessCategory: Maybe<Business>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the WROTE relationship. */
  AddUserReviews: Maybe<_AddUserReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the WROTE relationship. */
  RemoveUserReviews: Maybe<_RemoveUserReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the WROTE relationship. */
  MergeUserReviews: Maybe<_MergeUserReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a User node. */
  CreateUser: Maybe<User>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a User node. */
  UpdateUser: Maybe<User>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a User node. */
  DeleteUser: Maybe<User>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a User node. */
  MergeUser: Maybe<User>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the REVIEWS relationship. */
  AddBusinessReviews: Maybe<_AddBusinessReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the REVIEWS relationship. */
  RemoveBusinessReviews: Maybe<_RemoveBusinessReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the REVIEWS relationship. */
  MergeBusinessReviews: Maybe<_MergeBusinessReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the IN_CATEGORY relationship. */
  AddBusinessCategories: Maybe<_AddBusinessCategoriesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the IN_CATEGORY relationship. */
  RemoveBusinessCategories: Maybe<_RemoveBusinessCategoriesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the IN_CATEGORY relationship. */
  MergeBusinessCategories: Maybe<_MergeBusinessCategoriesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Business node. */
  CreateBusiness: Maybe<Business>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a Business node. */
  UpdateBusiness: Maybe<Business>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Business node. */
  DeleteBusiness: Maybe<Business>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Business node. */
  MergeBusiness: Maybe<Business>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the REVIEWS relationship. */
  AddReviewBusiness: Maybe<_AddReviewBusinessPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the REVIEWS relationship. */
  RemoveReviewBusiness: Maybe<_RemoveReviewBusinessPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the REVIEWS relationship. */
  MergeReviewBusiness: Maybe<_MergeReviewBusinessPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the WROTE relationship. */
  AddReviewUser: Maybe<_AddReviewUserPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the WROTE relationship. */
  RemoveReviewUser: Maybe<_RemoveReviewUserPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the WROTE relationship. */
  MergeReviewUser: Maybe<_MergeReviewUserPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Review node. */
  CreateReview: Maybe<Review>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a Review node. */
  UpdateReview: Maybe<Review>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Review node. */
  DeleteReview: Maybe<Review>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Review node. */
  MergeReview: Maybe<Review>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the IN_CATEGORY relationship. */
  AddCategoryBusinesses: Maybe<_AddCategoryBusinessesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the IN_CATEGORY relationship. */
  RemoveCategoryBusinesses: Maybe<_RemoveCategoryBusinessesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the IN_CATEGORY relationship. */
  MergeCategoryBusinesses: Maybe<_MergeCategoryBusinessesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Category node. */
  CreateCategory: Maybe<Category>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Category node. */
  DeleteCategory: Maybe<Category>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Category node. */
  MergeCategory: Maybe<Category>;
};


export type MutationMergeBusinessCategoryArgs = {
  categories: Array<Scalars['String']>;
  businessId: Scalars['ID'];
};


export type MutationAddUserReviewsArgs = {
  from: _UserInput;
  to: _ReviewInput;
};


export type MutationRemoveUserReviewsArgs = {
  from: _UserInput;
  to: _ReviewInput;
};


export type MutationMergeUserReviewsArgs = {
  from: _UserInput;
  to: _ReviewInput;
};


export type MutationCreateUserArgs = {
  userId: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};


export type MutationUpdateUserArgs = {
  userId: Scalars['ID'];
  name: Maybe<Scalars['String']>;
};


export type MutationDeleteUserArgs = {
  userId: Scalars['ID'];
};


export type MutationMergeUserArgs = {
  userId: Scalars['ID'];
  name: Maybe<Scalars['String']>;
};


export type MutationAddBusinessReviewsArgs = {
  from: _ReviewInput;
  to: _BusinessInput;
};


export type MutationRemoveBusinessReviewsArgs = {
  from: _ReviewInput;
  to: _BusinessInput;
};


export type MutationMergeBusinessReviewsArgs = {
  from: _ReviewInput;
  to: _BusinessInput;
};


export type MutationAddBusinessCategoriesArgs = {
  from: _BusinessInput;
  to: _CategoryInput;
};


export type MutationRemoveBusinessCategoriesArgs = {
  from: _BusinessInput;
  to: _CategoryInput;
};


export type MutationMergeBusinessCategoriesArgs = {
  from: _BusinessInput;
  to: _CategoryInput;
};


export type MutationCreateBusinessArgs = {
  businessId: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  address: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  state: Maybe<Scalars['String']>;
  location: Maybe<_Neo4jPointInput>;
};


export type MutationUpdateBusinessArgs = {
  businessId: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  address: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  state: Maybe<Scalars['String']>;
  location: Maybe<_Neo4jPointInput>;
};


export type MutationDeleteBusinessArgs = {
  businessId: Scalars['ID'];
};


export type MutationMergeBusinessArgs = {
  businessId: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  address: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  state: Maybe<Scalars['String']>;
  location: Maybe<_Neo4jPointInput>;
};


export type MutationAddReviewBusinessArgs = {
  from: _ReviewInput;
  to: _BusinessInput;
};


export type MutationRemoveReviewBusinessArgs = {
  from: _ReviewInput;
  to: _BusinessInput;
};


export type MutationMergeReviewBusinessArgs = {
  from: _ReviewInput;
  to: _BusinessInput;
};


export type MutationAddReviewUserArgs = {
  from: _UserInput;
  to: _ReviewInput;
};


export type MutationRemoveReviewUserArgs = {
  from: _UserInput;
  to: _ReviewInput;
};


export type MutationMergeReviewUserArgs = {
  from: _UserInput;
  to: _ReviewInput;
};


export type MutationCreateReviewArgs = {
  reviewId: Maybe<Scalars['ID']>;
  stars: Maybe<Scalars['Float']>;
  text: Maybe<Scalars['String']>;
  date: Maybe<_Neo4jDateInput>;
};


export type MutationUpdateReviewArgs = {
  reviewId: Scalars['ID'];
  stars: Maybe<Scalars['Float']>;
  text: Maybe<Scalars['String']>;
  date: Maybe<_Neo4jDateInput>;
};


export type MutationDeleteReviewArgs = {
  reviewId: Scalars['ID'];
};


export type MutationMergeReviewArgs = {
  reviewId: Scalars['ID'];
  stars: Maybe<Scalars['Float']>;
  text: Maybe<Scalars['String']>;
  date: Maybe<_Neo4jDateInput>;
};


export type MutationAddCategoryBusinessesArgs = {
  from: _BusinessInput;
  to: _CategoryInput;
};


export type MutationRemoveCategoryBusinessesArgs = {
  from: _BusinessInput;
  to: _CategoryInput;
};


export type MutationMergeCategoryBusinessesArgs = {
  from: _BusinessInput;
  to: _CategoryInput;
};


export type MutationCreateCategoryArgs = {
  name: Maybe<Scalars['ID']>;
};


export type MutationDeleteCategoryArgs = {
  name: Scalars['ID'];
};


export type MutationMergeCategoryArgs = {
  name: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  userCount: Scalars['Int'];
  ratingsCount: Maybe<Array<Maybe<RatingCount>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for User type nodes. */
  User: Maybe<Array<Maybe<User>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Business type nodes. */
  Business: Maybe<Array<Maybe<Business>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Review type nodes. */
  Review: Maybe<Array<Maybe<Review>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Category type nodes. */
  Category: Maybe<Array<Maybe<Category>>>;
};


export type QueryUserArgs = {
  userId: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  _id: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_UserOrdering>>>;
  filter: Maybe<_UserFilter>;
};


export type QueryBusinessArgs = {
  businessId: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  address: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  state: Maybe<Scalars['String']>;
  location: Maybe<_Neo4jPointInput>;
  _id: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_BusinessOrdering>>>;
  filter: Maybe<_BusinessFilter>;
};


export type QueryReviewArgs = {
  reviewId: Maybe<Scalars['ID']>;
  stars: Maybe<Scalars['Float']>;
  text: Maybe<Scalars['String']>;
  date: Maybe<_Neo4jDateInput>;
  _id: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_ReviewOrdering>>>;
  filter: Maybe<_ReviewFilter>;
};


export type QueryCategoryArgs = {
  name: Maybe<Scalars['ID']>;
  _id: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_CategoryOrdering>>>;
  filter: Maybe<_CategoryFilter>;
};

export type RecentReviewsQueryVariables = Exact<{ [key: string]: never; }>;


export type RecentReviewsQuery = (
  { __typename?: 'Query' }
  & { Review: Maybe<Array<Maybe<(
    { __typename?: 'Review' }
    & Pick<Review, 'text' | 'stars'>
    & { user: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'name'>
    )>, business: Maybe<(
      { __typename?: 'Business' }
      & Pick<Business, 'name'>
    )>, date: Maybe<(
      { __typename?: '_Neo4jDate' }
      & Pick<_Neo4jDate, 'formatted'>
    )> }
  )>>> }
);

export type UserCountQueryVariables = Exact<{ [key: string]: never; }>;


export type UserCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'userCount'>
);


export const RecentReviewsDocument = gql`
    query RecentReviews {
  Review(first: 10, orderBy: date_desc) {
    user {
      name
    }
    business {
      name
    }
    date {
      formatted
    }
    text
    stars
  }
}
    `;

/**
 * __useRecentReviewsQuery__
 *
 * To run a query within a React component, call `useRecentReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentReviewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecentReviewsQuery(baseOptions?: Apollo.QueryHookOptions<RecentReviewsQuery, RecentReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecentReviewsQuery, RecentReviewsQueryVariables>(RecentReviewsDocument, options);
      }
export function useRecentReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecentReviewsQuery, RecentReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecentReviewsQuery, RecentReviewsQueryVariables>(RecentReviewsDocument, options);
        }
export type RecentReviewsQueryHookResult = ReturnType<typeof useRecentReviewsQuery>;
export type RecentReviewsLazyQueryHookResult = ReturnType<typeof useRecentReviewsLazyQuery>;
export type RecentReviewsQueryResult = Apollo.QueryResult<RecentReviewsQuery, RecentReviewsQueryVariables>;
export const UserCountDocument = gql`
    query UserCount {
  userCount
}
    `;

/**
 * __useUserCountQuery__
 *
 * To run a query within a React component, call `useUserCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserCountQuery(baseOptions?: Apollo.QueryHookOptions<UserCountQuery, UserCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserCountQuery, UserCountQueryVariables>(UserCountDocument, options);
      }
export function useUserCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserCountQuery, UserCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserCountQuery, UserCountQueryVariables>(UserCountDocument, options);
        }
export type UserCountQueryHookResult = ReturnType<typeof useUserCountQuery>;
export type UserCountLazyQueryHookResult = ReturnType<typeof useUserCountLazyQuery>;
export type UserCountQueryResult = Apollo.QueryResult<UserCountQuery, UserCountQueryVariables>;