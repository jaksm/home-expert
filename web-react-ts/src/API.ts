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










export type _PropertyInput = {
  buildingValue: Scalars['Int'];
};

export enum _PropertyOrdering {
  AddressLineAsc = 'addressLine_asc',
  AddressLineDesc = 'addressLine_desc',
  AddressLine1Asc = 'addressLine1_asc',
  AddressLine1Desc = 'addressLine1_desc',
  AssessmentAsc = 'assessment_asc',
  AssessmentDesc = 'assessment_desc',
  BuildingValueAsc = 'buildingValue_asc',
  BuildingValueDesc = 'buildingValue_desc',
  CertificateAsc = 'certificate_asc',
  CertificateDesc = 'certificate_desc',
  CityStateAsc = 'cityState_asc',
  CityStateDesc = 'cityState_desc',
  ContinuousAsc = 'continuous_asc',
  ContinuousDesc = 'continuous_desc',
  CountyAbbreviationAsc = 'countyAbbreviation_asc',
  CountyAbbreviationDesc = 'countyAbbreviation_desc',
  CountyNameAsc = 'countyName_asc',
  CountyNameDesc = 'countyName_desc',
  FarmsiteAreaAsc = 'farmsiteArea_asc',
  FarmsiteAreaDesc = 'farmsiteArea_desc',
  ForestAreaAsc = 'forestArea_asc',
  ForestAreaDesc = 'forestArea_desc',
  GeometryAreaAsc = 'geometryArea_asc',
  GeometryAreaDesc = 'geometryArea_desc',
  GeometryLengthAsc = 'geometryLength_asc',
  GeometryLengthDesc = 'geometryLength_desc',
  GeometryTypeAsc = 'geometryType_asc',
  GeometryTypeDesc = 'geometryType_desc',
  GrazingAreaAsc = 'grazingArea_asc',
  GrazingAreaDesc = 'grazingArea_desc',
  IrrigatedAreaAsc = 'irrigatedArea_asc',
  IrrigatedAreaDesc = 'irrigatedArea_desc',
  LandValueAsc = 'landValue_asc',
  LandValueDesc = 'landValue_desc',
  LegalDescriptionAsc = 'legalDescription_asc',
  LegalDescriptionDesc = 'legalDescription_desc',
  LevyDistrictAsc = 'levyDistrict_asc',
  LevyDistrictDesc = 'levyDistrict_desc',
  NonQualityAreaAsc = 'nonQualityArea_asc',
  NonQualityAreaDesc = 'nonQualityArea_desc',
  OwnerAddressAsc = 'ownerAddress_asc',
  OwnerAddressDesc = 'ownerAddress_desc',
  OwnerAddressLine1Asc = 'ownerAddressLine1_asc',
  OwnerAddressLine1Desc = 'ownerAddressLine1_desc',
  OwnerAddressLine2Asc = 'ownerAddressLine2_asc',
  OwnerAddressLine2Desc = 'ownerAddressLine2_desc',
  OwnerCityAsc = 'ownerCity_asc',
  OwnerCityDesc = 'ownerCity_desc',
  OwnerNameAsc = 'ownerName_asc',
  OwnerNameDesc = 'ownerName_desc',
  OwnerStateAsc = 'ownerState_asc',
  OwnerStateDesc = 'ownerState_desc',
  OwnerZipAsc = 'ownerZip_asc',
  OwnerZipDesc = 'ownerZip_desc',
  PropertyIdAsc = 'propertyID_asc',
  PropertyIdDesc = 'propertyID_desc',
  RangeAsc = 'range_asc',
  RangeDesc = 'range_desc',
  SectionAsc = 'section_asc',
  SectionDesc = 'section_desc',
  SubdivisionAsc = 'subdivision_asc',
  SubdivisionDesc = 'subdivision_desc',
  TaxYearAsc = 'taxYear_asc',
  TaxYearDesc = 'taxYear_desc',
  TotalAreaAsc = 'totalArea_asc',
  TotalAreaDesc = 'totalArea_desc',
  TotalValueAsc = 'totalValue_asc',
  TotalValueDesc = 'totalValue_desc',
  TownshipAsc = 'township_asc',
  TownshipDesc = 'township_desc',
  TypeAsc = 'type_asc',
  TypeDesc = 'type_desc',
  WildHayAreaAsc = 'wildHayArea_asc',
  WildHayAreaDesc = 'wildHayArea_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _PropertyFilter = {
  AND: Maybe<Array<_PropertyFilter>>;
  OR: Maybe<Array<_PropertyFilter>>;
  addressLine: Maybe<Scalars['String']>;
  addressLine_not: Maybe<Scalars['String']>;
  addressLine_in: Maybe<Array<Scalars['String']>>;
  addressLine_not_in: Maybe<Array<Scalars['String']>>;
  addressLine_regexp: Maybe<Scalars['String']>;
  addressLine_contains: Maybe<Scalars['String']>;
  addressLine_not_contains: Maybe<Scalars['String']>;
  addressLine_starts_with: Maybe<Scalars['String']>;
  addressLine_not_starts_with: Maybe<Scalars['String']>;
  addressLine_ends_with: Maybe<Scalars['String']>;
  addressLine_not_ends_with: Maybe<Scalars['String']>;
  addressLine1: Maybe<Scalars['String']>;
  addressLine1_not: Maybe<Scalars['String']>;
  addressLine1_in: Maybe<Array<Scalars['String']>>;
  addressLine1_not_in: Maybe<Array<Scalars['String']>>;
  addressLine1_regexp: Maybe<Scalars['String']>;
  addressLine1_contains: Maybe<Scalars['String']>;
  addressLine1_not_contains: Maybe<Scalars['String']>;
  addressLine1_starts_with: Maybe<Scalars['String']>;
  addressLine1_not_starts_with: Maybe<Scalars['String']>;
  addressLine1_ends_with: Maybe<Scalars['String']>;
  addressLine1_not_ends_with: Maybe<Scalars['String']>;
  assessment: Maybe<Scalars['String']>;
  assessment_not: Maybe<Scalars['String']>;
  assessment_in: Maybe<Array<Scalars['String']>>;
  assessment_not_in: Maybe<Array<Scalars['String']>>;
  assessment_regexp: Maybe<Scalars['String']>;
  assessment_contains: Maybe<Scalars['String']>;
  assessment_not_contains: Maybe<Scalars['String']>;
  assessment_starts_with: Maybe<Scalars['String']>;
  assessment_not_starts_with: Maybe<Scalars['String']>;
  assessment_ends_with: Maybe<Scalars['String']>;
  assessment_not_ends_with: Maybe<Scalars['String']>;
  buildingValue: Maybe<Scalars['Int']>;
  buildingValue_not: Maybe<Scalars['Int']>;
  buildingValue_in: Maybe<Array<Scalars['Int']>>;
  buildingValue_not_in: Maybe<Array<Scalars['Int']>>;
  buildingValue_lt: Maybe<Scalars['Int']>;
  buildingValue_lte: Maybe<Scalars['Int']>;
  buildingValue_gt: Maybe<Scalars['Int']>;
  buildingValue_gte: Maybe<Scalars['Int']>;
  certificate: Maybe<Scalars['String']>;
  certificate_not: Maybe<Scalars['String']>;
  certificate_in: Maybe<Array<Scalars['String']>>;
  certificate_not_in: Maybe<Array<Scalars['String']>>;
  certificate_regexp: Maybe<Scalars['String']>;
  certificate_contains: Maybe<Scalars['String']>;
  certificate_not_contains: Maybe<Scalars['String']>;
  certificate_starts_with: Maybe<Scalars['String']>;
  certificate_not_starts_with: Maybe<Scalars['String']>;
  certificate_ends_with: Maybe<Scalars['String']>;
  certificate_not_ends_with: Maybe<Scalars['String']>;
  cityState: Maybe<Scalars['String']>;
  cityState_not: Maybe<Scalars['String']>;
  cityState_in: Maybe<Array<Scalars['String']>>;
  cityState_not_in: Maybe<Array<Scalars['String']>>;
  cityState_regexp: Maybe<Scalars['String']>;
  cityState_contains: Maybe<Scalars['String']>;
  cityState_not_contains: Maybe<Scalars['String']>;
  cityState_starts_with: Maybe<Scalars['String']>;
  cityState_not_starts_with: Maybe<Scalars['String']>;
  cityState_ends_with: Maybe<Scalars['String']>;
  cityState_not_ends_with: Maybe<Scalars['String']>;
  continuous: Maybe<Scalars['Float']>;
  continuous_not: Maybe<Scalars['Float']>;
  continuous_in: Maybe<Array<Scalars['Float']>>;
  continuous_not_in: Maybe<Array<Scalars['Float']>>;
  continuous_lt: Maybe<Scalars['Float']>;
  continuous_lte: Maybe<Scalars['Float']>;
  continuous_gt: Maybe<Scalars['Float']>;
  continuous_gte: Maybe<Scalars['Float']>;
  countyAbbreviation: Maybe<Scalars['String']>;
  countyAbbreviation_not: Maybe<Scalars['String']>;
  countyAbbreviation_in: Maybe<Array<Scalars['String']>>;
  countyAbbreviation_not_in: Maybe<Array<Scalars['String']>>;
  countyAbbreviation_regexp: Maybe<Scalars['String']>;
  countyAbbreviation_contains: Maybe<Scalars['String']>;
  countyAbbreviation_not_contains: Maybe<Scalars['String']>;
  countyAbbreviation_starts_with: Maybe<Scalars['String']>;
  countyAbbreviation_not_starts_with: Maybe<Scalars['String']>;
  countyAbbreviation_ends_with: Maybe<Scalars['String']>;
  countyAbbreviation_not_ends_with: Maybe<Scalars['String']>;
  countyName: Maybe<Scalars['String']>;
  countyName_not: Maybe<Scalars['String']>;
  countyName_in: Maybe<Array<Scalars['String']>>;
  countyName_not_in: Maybe<Array<Scalars['String']>>;
  countyName_regexp: Maybe<Scalars['String']>;
  countyName_contains: Maybe<Scalars['String']>;
  countyName_not_contains: Maybe<Scalars['String']>;
  countyName_starts_with: Maybe<Scalars['String']>;
  countyName_not_starts_with: Maybe<Scalars['String']>;
  countyName_ends_with: Maybe<Scalars['String']>;
  countyName_not_ends_with: Maybe<Scalars['String']>;
  farmsiteArea: Maybe<Scalars['Float']>;
  farmsiteArea_not: Maybe<Scalars['Float']>;
  farmsiteArea_in: Maybe<Array<Scalars['Float']>>;
  farmsiteArea_not_in: Maybe<Array<Scalars['Float']>>;
  farmsiteArea_lt: Maybe<Scalars['Float']>;
  farmsiteArea_lte: Maybe<Scalars['Float']>;
  farmsiteArea_gt: Maybe<Scalars['Float']>;
  farmsiteArea_gte: Maybe<Scalars['Float']>;
  forestArea: Maybe<Scalars['Float']>;
  forestArea_not: Maybe<Scalars['Float']>;
  forestArea_in: Maybe<Array<Scalars['Float']>>;
  forestArea_not_in: Maybe<Array<Scalars['Float']>>;
  forestArea_lt: Maybe<Scalars['Float']>;
  forestArea_lte: Maybe<Scalars['Float']>;
  forestArea_gt: Maybe<Scalars['Float']>;
  forestArea_gte: Maybe<Scalars['Float']>;
  geometryArea: Maybe<Scalars['Float']>;
  geometryArea_not: Maybe<Scalars['Float']>;
  geometryArea_in: Maybe<Array<Scalars['Float']>>;
  geometryArea_not_in: Maybe<Array<Scalars['Float']>>;
  geometryArea_lt: Maybe<Scalars['Float']>;
  geometryArea_lte: Maybe<Scalars['Float']>;
  geometryArea_gt: Maybe<Scalars['Float']>;
  geometryArea_gte: Maybe<Scalars['Float']>;
  geometryLength: Maybe<Scalars['Float']>;
  geometryLength_not: Maybe<Scalars['Float']>;
  geometryLength_in: Maybe<Array<Scalars['Float']>>;
  geometryLength_not_in: Maybe<Array<Scalars['Float']>>;
  geometryLength_lt: Maybe<Scalars['Float']>;
  geometryLength_lte: Maybe<Scalars['Float']>;
  geometryLength_gt: Maybe<Scalars['Float']>;
  geometryLength_gte: Maybe<Scalars['Float']>;
  geometryType: Maybe<Scalars['String']>;
  geometryType_not: Maybe<Scalars['String']>;
  geometryType_in: Maybe<Array<Scalars['String']>>;
  geometryType_not_in: Maybe<Array<Scalars['String']>>;
  geometryType_regexp: Maybe<Scalars['String']>;
  geometryType_contains: Maybe<Scalars['String']>;
  geometryType_not_contains: Maybe<Scalars['String']>;
  geometryType_starts_with: Maybe<Scalars['String']>;
  geometryType_not_starts_with: Maybe<Scalars['String']>;
  geometryType_ends_with: Maybe<Scalars['String']>;
  geometryType_not_ends_with: Maybe<Scalars['String']>;
  grazingArea: Maybe<Scalars['Float']>;
  grazingArea_not: Maybe<Scalars['Float']>;
  grazingArea_in: Maybe<Array<Scalars['Float']>>;
  grazingArea_not_in: Maybe<Array<Scalars['Float']>>;
  grazingArea_lt: Maybe<Scalars['Float']>;
  grazingArea_lte: Maybe<Scalars['Float']>;
  grazingArea_gt: Maybe<Scalars['Float']>;
  grazingArea_gte: Maybe<Scalars['Float']>;
  irrigatedArea: Maybe<Scalars['Float']>;
  irrigatedArea_not: Maybe<Scalars['Float']>;
  irrigatedArea_in: Maybe<Array<Scalars['Float']>>;
  irrigatedArea_not_in: Maybe<Array<Scalars['Float']>>;
  irrigatedArea_lt: Maybe<Scalars['Float']>;
  irrigatedArea_lte: Maybe<Scalars['Float']>;
  irrigatedArea_gt: Maybe<Scalars['Float']>;
  irrigatedArea_gte: Maybe<Scalars['Float']>;
  landValue: Maybe<Scalars['Int']>;
  landValue_not: Maybe<Scalars['Int']>;
  landValue_in: Maybe<Array<Scalars['Int']>>;
  landValue_not_in: Maybe<Array<Scalars['Int']>>;
  landValue_lt: Maybe<Scalars['Int']>;
  landValue_lte: Maybe<Scalars['Int']>;
  landValue_gt: Maybe<Scalars['Int']>;
  landValue_gte: Maybe<Scalars['Int']>;
  legalDescription: Maybe<Scalars['String']>;
  legalDescription_not: Maybe<Scalars['String']>;
  legalDescription_in: Maybe<Array<Scalars['String']>>;
  legalDescription_not_in: Maybe<Array<Scalars['String']>>;
  legalDescription_regexp: Maybe<Scalars['String']>;
  legalDescription_contains: Maybe<Scalars['String']>;
  legalDescription_not_contains: Maybe<Scalars['String']>;
  legalDescription_starts_with: Maybe<Scalars['String']>;
  legalDescription_not_starts_with: Maybe<Scalars['String']>;
  legalDescription_ends_with: Maybe<Scalars['String']>;
  legalDescription_not_ends_with: Maybe<Scalars['String']>;
  levyDistrict: Maybe<Scalars['String']>;
  levyDistrict_not: Maybe<Scalars['String']>;
  levyDistrict_in: Maybe<Array<Scalars['String']>>;
  levyDistrict_not_in: Maybe<Array<Scalars['String']>>;
  levyDistrict_regexp: Maybe<Scalars['String']>;
  levyDistrict_contains: Maybe<Scalars['String']>;
  levyDistrict_not_contains: Maybe<Scalars['String']>;
  levyDistrict_starts_with: Maybe<Scalars['String']>;
  levyDistrict_not_starts_with: Maybe<Scalars['String']>;
  levyDistrict_ends_with: Maybe<Scalars['String']>;
  levyDistrict_not_ends_with: Maybe<Scalars['String']>;
  nonQualityArea: Maybe<Scalars['Float']>;
  nonQualityArea_not: Maybe<Scalars['Float']>;
  nonQualityArea_in: Maybe<Array<Scalars['Float']>>;
  nonQualityArea_not_in: Maybe<Array<Scalars['Float']>>;
  nonQualityArea_lt: Maybe<Scalars['Float']>;
  nonQualityArea_lte: Maybe<Scalars['Float']>;
  nonQualityArea_gt: Maybe<Scalars['Float']>;
  nonQualityArea_gte: Maybe<Scalars['Float']>;
  ownerAddress: Maybe<Scalars['String']>;
  ownerAddress_not: Maybe<Scalars['String']>;
  ownerAddress_in: Maybe<Array<Scalars['String']>>;
  ownerAddress_not_in: Maybe<Array<Scalars['String']>>;
  ownerAddress_regexp: Maybe<Scalars['String']>;
  ownerAddress_contains: Maybe<Scalars['String']>;
  ownerAddress_not_contains: Maybe<Scalars['String']>;
  ownerAddress_starts_with: Maybe<Scalars['String']>;
  ownerAddress_not_starts_with: Maybe<Scalars['String']>;
  ownerAddress_ends_with: Maybe<Scalars['String']>;
  ownerAddress_not_ends_with: Maybe<Scalars['String']>;
  ownerAddressLine1: Maybe<Scalars['String']>;
  ownerAddressLine1_not: Maybe<Scalars['String']>;
  ownerAddressLine1_in: Maybe<Array<Scalars['String']>>;
  ownerAddressLine1_not_in: Maybe<Array<Scalars['String']>>;
  ownerAddressLine1_regexp: Maybe<Scalars['String']>;
  ownerAddressLine1_contains: Maybe<Scalars['String']>;
  ownerAddressLine1_not_contains: Maybe<Scalars['String']>;
  ownerAddressLine1_starts_with: Maybe<Scalars['String']>;
  ownerAddressLine1_not_starts_with: Maybe<Scalars['String']>;
  ownerAddressLine1_ends_with: Maybe<Scalars['String']>;
  ownerAddressLine1_not_ends_with: Maybe<Scalars['String']>;
  ownerAddressLine2: Maybe<Scalars['String']>;
  ownerAddressLine2_not: Maybe<Scalars['String']>;
  ownerAddressLine2_in: Maybe<Array<Scalars['String']>>;
  ownerAddressLine2_not_in: Maybe<Array<Scalars['String']>>;
  ownerAddressLine2_regexp: Maybe<Scalars['String']>;
  ownerAddressLine2_contains: Maybe<Scalars['String']>;
  ownerAddressLine2_not_contains: Maybe<Scalars['String']>;
  ownerAddressLine2_starts_with: Maybe<Scalars['String']>;
  ownerAddressLine2_not_starts_with: Maybe<Scalars['String']>;
  ownerAddressLine2_ends_with: Maybe<Scalars['String']>;
  ownerAddressLine2_not_ends_with: Maybe<Scalars['String']>;
  ownerCity: Maybe<Scalars['String']>;
  ownerCity_not: Maybe<Scalars['String']>;
  ownerCity_in: Maybe<Array<Scalars['String']>>;
  ownerCity_not_in: Maybe<Array<Scalars['String']>>;
  ownerCity_regexp: Maybe<Scalars['String']>;
  ownerCity_contains: Maybe<Scalars['String']>;
  ownerCity_not_contains: Maybe<Scalars['String']>;
  ownerCity_starts_with: Maybe<Scalars['String']>;
  ownerCity_not_starts_with: Maybe<Scalars['String']>;
  ownerCity_ends_with: Maybe<Scalars['String']>;
  ownerCity_not_ends_with: Maybe<Scalars['String']>;
  ownerName: Maybe<Scalars['String']>;
  ownerName_not: Maybe<Scalars['String']>;
  ownerName_in: Maybe<Array<Scalars['String']>>;
  ownerName_not_in: Maybe<Array<Scalars['String']>>;
  ownerName_regexp: Maybe<Scalars['String']>;
  ownerName_contains: Maybe<Scalars['String']>;
  ownerName_not_contains: Maybe<Scalars['String']>;
  ownerName_starts_with: Maybe<Scalars['String']>;
  ownerName_not_starts_with: Maybe<Scalars['String']>;
  ownerName_ends_with: Maybe<Scalars['String']>;
  ownerName_not_ends_with: Maybe<Scalars['String']>;
  ownerState: Maybe<Scalars['String']>;
  ownerState_not: Maybe<Scalars['String']>;
  ownerState_in: Maybe<Array<Scalars['String']>>;
  ownerState_not_in: Maybe<Array<Scalars['String']>>;
  ownerState_regexp: Maybe<Scalars['String']>;
  ownerState_contains: Maybe<Scalars['String']>;
  ownerState_not_contains: Maybe<Scalars['String']>;
  ownerState_starts_with: Maybe<Scalars['String']>;
  ownerState_not_starts_with: Maybe<Scalars['String']>;
  ownerState_ends_with: Maybe<Scalars['String']>;
  ownerState_not_ends_with: Maybe<Scalars['String']>;
  ownerZip: Maybe<Scalars['String']>;
  ownerZip_not: Maybe<Scalars['String']>;
  ownerZip_in: Maybe<Array<Scalars['String']>>;
  ownerZip_not_in: Maybe<Array<Scalars['String']>>;
  ownerZip_regexp: Maybe<Scalars['String']>;
  ownerZip_contains: Maybe<Scalars['String']>;
  ownerZip_not_contains: Maybe<Scalars['String']>;
  ownerZip_starts_with: Maybe<Scalars['String']>;
  ownerZip_not_starts_with: Maybe<Scalars['String']>;
  ownerZip_ends_with: Maybe<Scalars['String']>;
  ownerZip_not_ends_with: Maybe<Scalars['String']>;
  propertyID: Maybe<Scalars['Int']>;
  propertyID_not: Maybe<Scalars['Int']>;
  propertyID_in: Maybe<Array<Scalars['Int']>>;
  propertyID_not_in: Maybe<Array<Scalars['Int']>>;
  propertyID_lt: Maybe<Scalars['Int']>;
  propertyID_lte: Maybe<Scalars['Int']>;
  propertyID_gt: Maybe<Scalars['Int']>;
  propertyID_gte: Maybe<Scalars['Int']>;
  range: Maybe<Scalars['String']>;
  range_not: Maybe<Scalars['String']>;
  range_in: Maybe<Array<Scalars['String']>>;
  range_not_in: Maybe<Array<Scalars['String']>>;
  range_regexp: Maybe<Scalars['String']>;
  range_contains: Maybe<Scalars['String']>;
  range_not_contains: Maybe<Scalars['String']>;
  range_starts_with: Maybe<Scalars['String']>;
  range_not_starts_with: Maybe<Scalars['String']>;
  range_ends_with: Maybe<Scalars['String']>;
  range_not_ends_with: Maybe<Scalars['String']>;
  section: Maybe<Scalars['String']>;
  section_not: Maybe<Scalars['String']>;
  section_in: Maybe<Array<Scalars['String']>>;
  section_not_in: Maybe<Array<Scalars['String']>>;
  section_regexp: Maybe<Scalars['String']>;
  section_contains: Maybe<Scalars['String']>;
  section_not_contains: Maybe<Scalars['String']>;
  section_starts_with: Maybe<Scalars['String']>;
  section_not_starts_with: Maybe<Scalars['String']>;
  section_ends_with: Maybe<Scalars['String']>;
  section_not_ends_with: Maybe<Scalars['String']>;
  subdivision: Maybe<Scalars['String']>;
  subdivision_not: Maybe<Scalars['String']>;
  subdivision_in: Maybe<Array<Scalars['String']>>;
  subdivision_not_in: Maybe<Array<Scalars['String']>>;
  subdivision_regexp: Maybe<Scalars['String']>;
  subdivision_contains: Maybe<Scalars['String']>;
  subdivision_not_contains: Maybe<Scalars['String']>;
  subdivision_starts_with: Maybe<Scalars['String']>;
  subdivision_not_starts_with: Maybe<Scalars['String']>;
  subdivision_ends_with: Maybe<Scalars['String']>;
  subdivision_not_ends_with: Maybe<Scalars['String']>;
  taxYear: Maybe<Scalars['Int']>;
  taxYear_not: Maybe<Scalars['Int']>;
  taxYear_in: Maybe<Array<Scalars['Int']>>;
  taxYear_not_in: Maybe<Array<Scalars['Int']>>;
  taxYear_lt: Maybe<Scalars['Int']>;
  taxYear_lte: Maybe<Scalars['Int']>;
  taxYear_gt: Maybe<Scalars['Int']>;
  taxYear_gte: Maybe<Scalars['Int']>;
  totalArea: Maybe<Scalars['Float']>;
  totalArea_not: Maybe<Scalars['Float']>;
  totalArea_in: Maybe<Array<Scalars['Float']>>;
  totalArea_not_in: Maybe<Array<Scalars['Float']>>;
  totalArea_lt: Maybe<Scalars['Float']>;
  totalArea_lte: Maybe<Scalars['Float']>;
  totalArea_gt: Maybe<Scalars['Float']>;
  totalArea_gte: Maybe<Scalars['Float']>;
  totalValue: Maybe<Scalars['Int']>;
  totalValue_not: Maybe<Scalars['Int']>;
  totalValue_in: Maybe<Array<Scalars['Int']>>;
  totalValue_not_in: Maybe<Array<Scalars['Int']>>;
  totalValue_lt: Maybe<Scalars['Int']>;
  totalValue_lte: Maybe<Scalars['Int']>;
  totalValue_gt: Maybe<Scalars['Int']>;
  totalValue_gte: Maybe<Scalars['Int']>;
  township: Maybe<Scalars['String']>;
  township_not: Maybe<Scalars['String']>;
  township_in: Maybe<Array<Scalars['String']>>;
  township_not_in: Maybe<Array<Scalars['String']>>;
  township_regexp: Maybe<Scalars['String']>;
  township_contains: Maybe<Scalars['String']>;
  township_not_contains: Maybe<Scalars['String']>;
  township_starts_with: Maybe<Scalars['String']>;
  township_not_starts_with: Maybe<Scalars['String']>;
  township_ends_with: Maybe<Scalars['String']>;
  township_not_ends_with: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  type_not: Maybe<Scalars['String']>;
  type_in: Maybe<Array<Scalars['String']>>;
  type_not_in: Maybe<Array<Scalars['String']>>;
  type_regexp: Maybe<Scalars['String']>;
  type_contains: Maybe<Scalars['String']>;
  type_not_contains: Maybe<Scalars['String']>;
  type_starts_with: Maybe<Scalars['String']>;
  type_not_starts_with: Maybe<Scalars['String']>;
  type_ends_with: Maybe<Scalars['String']>;
  type_not_ends_with: Maybe<Scalars['String']>;
  wildHayArea: Maybe<Scalars['Float']>;
  wildHayArea_not: Maybe<Scalars['Float']>;
  wildHayArea_in: Maybe<Array<Scalars['Float']>>;
  wildHayArea_not_in: Maybe<Array<Scalars['Float']>>;
  wildHayArea_lt: Maybe<Scalars['Float']>;
  wildHayArea_lte: Maybe<Scalars['Float']>;
  wildHayArea_gt: Maybe<Scalars['Float']>;
  wildHayArea_gte: Maybe<Scalars['Float']>;
};

export type Property = {
  __typename?: 'Property';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id: Maybe<Scalars['String']>;
  addressLine: Maybe<Scalars['String']>;
  addressLine1: Maybe<Scalars['String']>;
  assessment: Maybe<Scalars['String']>;
  buildingValue: Scalars['Int'];
  certificate: Maybe<Scalars['String']>;
  cityState: Maybe<Scalars['String']>;
  continuous: Scalars['Float'];
  countyAbbreviation: Scalars['String'];
  countyName: Scalars['String'];
  farmsiteArea: Scalars['Float'];
  forestArea: Scalars['Float'];
  geometryArea: Scalars['Float'];
  geometryLength: Scalars['Float'];
  geometryType: Scalars['String'];
  grazingArea: Scalars['Float'];
  irrigatedArea: Scalars['Float'];
  landValue: Scalars['Int'];
  legalDescription: Maybe<Scalars['String']>;
  levyDistrict: Maybe<Scalars['String']>;
  nonQualityArea: Scalars['Float'];
  ownerAddress: Maybe<Scalars['String']>;
  ownerAddressLine1: Maybe<Scalars['String']>;
  ownerAddressLine2: Maybe<Scalars['String']>;
  ownerCity: Maybe<Scalars['String']>;
  ownerName: Maybe<Scalars['String']>;
  ownerState: Maybe<Scalars['String']>;
  ownerZip: Maybe<Scalars['String']>;
  propertyID: Scalars['Int'];
  range: Maybe<Scalars['String']>;
  section: Maybe<Scalars['String']>;
  subdivision: Maybe<Scalars['String']>;
  taxYear: Scalars['Int'];
  totalArea: Scalars['Float'];
  totalValue: Scalars['Int'];
  township: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  wildHayArea: Scalars['Float'];
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

export type Query = {
  __typename?: 'Query';
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Property type nodes. */
  Property: Maybe<Array<Maybe<Property>>>;
};


export type QueryPropertyArgs = {
  addressLine: Maybe<Scalars['String']>;
  addressLine1: Maybe<Scalars['String']>;
  assessment: Maybe<Scalars['String']>;
  buildingValue: Maybe<Scalars['Int']>;
  certificate: Maybe<Scalars['String']>;
  cityState: Maybe<Scalars['String']>;
  continuous: Maybe<Scalars['Float']>;
  countyAbbreviation: Maybe<Scalars['String']>;
  countyName: Maybe<Scalars['String']>;
  farmsiteArea: Maybe<Scalars['Float']>;
  forestArea: Maybe<Scalars['Float']>;
  geometryArea: Maybe<Scalars['Float']>;
  geometryLength: Maybe<Scalars['Float']>;
  geometryType: Maybe<Scalars['String']>;
  grazingArea: Maybe<Scalars['Float']>;
  irrigatedArea: Maybe<Scalars['Float']>;
  landValue: Maybe<Scalars['Int']>;
  legalDescription: Maybe<Scalars['String']>;
  levyDistrict: Maybe<Scalars['String']>;
  nonQualityArea: Maybe<Scalars['Float']>;
  ownerAddress: Maybe<Scalars['String']>;
  ownerAddressLine1: Maybe<Scalars['String']>;
  ownerAddressLine2: Maybe<Scalars['String']>;
  ownerCity: Maybe<Scalars['String']>;
  ownerName: Maybe<Scalars['String']>;
  ownerState: Maybe<Scalars['String']>;
  ownerZip: Maybe<Scalars['String']>;
  propertyID: Maybe<Scalars['Int']>;
  range: Maybe<Scalars['String']>;
  section: Maybe<Scalars['String']>;
  subdivision: Maybe<Scalars['String']>;
  taxYear: Maybe<Scalars['Int']>;
  totalArea: Maybe<Scalars['Float']>;
  totalValue: Maybe<Scalars['Int']>;
  township: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  wildHayArea: Maybe<Scalars['Float']>;
  _id: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_PropertyOrdering>>>;
  filter: Maybe<_PropertyFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Property node. */
  CreateProperty: Maybe<Property>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a Property node. */
  UpdateProperty: Maybe<Property>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Property node. */
  DeleteProperty: Maybe<Property>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Property node. */
  MergeProperty: Maybe<Property>;
};


export type MutationCreatePropertyArgs = {
  addressLine: Maybe<Scalars['String']>;
  addressLine1: Maybe<Scalars['String']>;
  assessment: Maybe<Scalars['String']>;
  buildingValue: Scalars['Int'];
  certificate: Maybe<Scalars['String']>;
  cityState: Maybe<Scalars['String']>;
  continuous: Scalars['Float'];
  countyAbbreviation: Scalars['String'];
  countyName: Scalars['String'];
  farmsiteArea: Scalars['Float'];
  forestArea: Scalars['Float'];
  geometryArea: Scalars['Float'];
  geometryLength: Scalars['Float'];
  geometryType: Scalars['String'];
  grazingArea: Scalars['Float'];
  irrigatedArea: Scalars['Float'];
  landValue: Scalars['Int'];
  legalDescription: Maybe<Scalars['String']>;
  levyDistrict: Maybe<Scalars['String']>;
  nonQualityArea: Scalars['Float'];
  ownerAddress: Maybe<Scalars['String']>;
  ownerAddressLine1: Maybe<Scalars['String']>;
  ownerAddressLine2: Maybe<Scalars['String']>;
  ownerCity: Maybe<Scalars['String']>;
  ownerName: Maybe<Scalars['String']>;
  ownerState: Maybe<Scalars['String']>;
  ownerZip: Maybe<Scalars['String']>;
  propertyID: Scalars['Int'];
  range: Maybe<Scalars['String']>;
  section: Maybe<Scalars['String']>;
  subdivision: Maybe<Scalars['String']>;
  taxYear: Scalars['Int'];
  totalArea: Scalars['Float'];
  totalValue: Scalars['Int'];
  township: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  wildHayArea: Scalars['Float'];
};


export type MutationUpdatePropertyArgs = {
  addressLine: Maybe<Scalars['String']>;
  addressLine1: Maybe<Scalars['String']>;
  assessment: Maybe<Scalars['String']>;
  buildingValue: Scalars['Int'];
  certificate: Maybe<Scalars['String']>;
  cityState: Maybe<Scalars['String']>;
  continuous: Maybe<Scalars['Float']>;
  countyAbbreviation: Maybe<Scalars['String']>;
  countyName: Maybe<Scalars['String']>;
  farmsiteArea: Maybe<Scalars['Float']>;
  forestArea: Maybe<Scalars['Float']>;
  geometryArea: Maybe<Scalars['Float']>;
  geometryLength: Maybe<Scalars['Float']>;
  geometryType: Maybe<Scalars['String']>;
  grazingArea: Maybe<Scalars['Float']>;
  irrigatedArea: Maybe<Scalars['Float']>;
  landValue: Maybe<Scalars['Int']>;
  legalDescription: Maybe<Scalars['String']>;
  levyDistrict: Maybe<Scalars['String']>;
  nonQualityArea: Maybe<Scalars['Float']>;
  ownerAddress: Maybe<Scalars['String']>;
  ownerAddressLine1: Maybe<Scalars['String']>;
  ownerAddressLine2: Maybe<Scalars['String']>;
  ownerCity: Maybe<Scalars['String']>;
  ownerName: Maybe<Scalars['String']>;
  ownerState: Maybe<Scalars['String']>;
  ownerZip: Maybe<Scalars['String']>;
  propertyID: Maybe<Scalars['Int']>;
  range: Maybe<Scalars['String']>;
  section: Maybe<Scalars['String']>;
  subdivision: Maybe<Scalars['String']>;
  taxYear: Maybe<Scalars['Int']>;
  totalArea: Maybe<Scalars['Float']>;
  totalValue: Maybe<Scalars['Int']>;
  township: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  wildHayArea: Maybe<Scalars['Float']>;
};


export type MutationDeletePropertyArgs = {
  buildingValue: Scalars['Int'];
};


export type MutationMergePropertyArgs = {
  addressLine: Maybe<Scalars['String']>;
  addressLine1: Maybe<Scalars['String']>;
  assessment: Maybe<Scalars['String']>;
  buildingValue: Scalars['Int'];
  certificate: Maybe<Scalars['String']>;
  cityState: Maybe<Scalars['String']>;
  continuous: Maybe<Scalars['Float']>;
  countyAbbreviation: Maybe<Scalars['String']>;
  countyName: Maybe<Scalars['String']>;
  farmsiteArea: Maybe<Scalars['Float']>;
  forestArea: Maybe<Scalars['Float']>;
  geometryArea: Maybe<Scalars['Float']>;
  geometryLength: Maybe<Scalars['Float']>;
  geometryType: Maybe<Scalars['String']>;
  grazingArea: Maybe<Scalars['Float']>;
  irrigatedArea: Maybe<Scalars['Float']>;
  landValue: Maybe<Scalars['Int']>;
  legalDescription: Maybe<Scalars['String']>;
  levyDistrict: Maybe<Scalars['String']>;
  nonQualityArea: Maybe<Scalars['Float']>;
  ownerAddress: Maybe<Scalars['String']>;
  ownerAddressLine1: Maybe<Scalars['String']>;
  ownerAddressLine2: Maybe<Scalars['String']>;
  ownerCity: Maybe<Scalars['String']>;
  ownerName: Maybe<Scalars['String']>;
  ownerState: Maybe<Scalars['String']>;
  ownerZip: Maybe<Scalars['String']>;
  propertyID: Maybe<Scalars['Int']>;
  range: Maybe<Scalars['String']>;
  section: Maybe<Scalars['String']>;
  subdivision: Maybe<Scalars['String']>;
  taxYear: Maybe<Scalars['Int']>;
  totalArea: Maybe<Scalars['Float']>;
  totalValue: Maybe<Scalars['Int']>;
  township: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  wildHayArea: Maybe<Scalars['Float']>;
};

export type PropertiesQueryVariables = Exact<{ [key: string]: never; }>;


export type PropertiesQuery = (
  { __typename?: 'Query' }
  & { Property: Maybe<Array<Maybe<(
    { __typename?: 'Property' }
    & Pick<Property, 'propertyID' | 'addressLine' | 'assessment' | 'totalValue'>
  )>>> }
);


export const PropertiesDocument = gql`
    query Properties {
  Property(first: 100) {
    propertyID
    addressLine
    assessment
    totalValue
  }
}
    `;

/**
 * __usePropertiesQuery__
 *
 * To run a query within a React component, call `usePropertiesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePropertiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePropertiesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePropertiesQuery(baseOptions?: Apollo.QueryHookOptions<PropertiesQuery, PropertiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PropertiesQuery, PropertiesQueryVariables>(PropertiesDocument, options);
      }
export function usePropertiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PropertiesQuery, PropertiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PropertiesQuery, PropertiesQueryVariables>(PropertiesDocument, options);
        }
export type PropertiesQueryHookResult = ReturnType<typeof usePropertiesQuery>;
export type PropertiesLazyQueryHookResult = ReturnType<typeof usePropertiesLazyQuery>;
export type PropertiesQueryResult = Apollo.QueryResult<PropertiesQuery, PropertiesQueryVariables>;