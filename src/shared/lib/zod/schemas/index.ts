import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const AgencyScalarFieldEnumSchema = z.enum(['id','name','createdAt','updatedAt']);

export const UserScalarFieldEnumSchema = z.enum(['id','email','name','phone','tel','profileImage','createdAt','updatedAt','agencyId']);

export const ListingScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','listingType','location','roadAddress','buildingName','internalManagementId','currentStatus','mainCategory','subCategory','label','isHidden','photos','totalFloors','currentFloors','landArea','totalFloorArea','buildingArea','grossFloorAreaForFAR','primaryUsage','primaryStructure','elevator','parking','roadWidth','additionalUsage','buildingHeight','roofStructure','numberOfHouseholds','approvalDate','constructionStartDate','occupancyApprovalDate','renovationDate','rentalUsage','rentalArea','exclusiveArea','heating','deposit','monthlyRent','fixedMonthlyCost','maintenanceFeeRental','tax','purchasePrice','depositPrice','yield','averagePrice','securityDeposit','monthlyRentSale','maintenanceFeeSale','loanStatus','agencyId','userId']);

export const LandInfoScalarFieldEnumSchema = z.enum(['id','listingId','lotNumber','landAreaSqm','appraisedPricePerSqm','landCategory','zoningArea','usageStatus','ownershipType','ownershipChangeDate','ownershipChangeReason','roadContactType','topography','landShape','nationalLandUsePlan','nationalLandUsePlanStatus','otherLandUsePlan','otherLandUsePlanStatus']);

export const CommentScalarFieldEnumSchema = z.enum(['id','content','recordType','createdAt','updatedAt','listingId','userId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const ListingTypeSchema = z.enum(['RENTAL','SALE']);

export type ListingTypeType = `${z.infer<typeof ListingTypeSchema>}`


/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// AGENCY
//------------------------------------------------------

export const AgencyIncludeSchema: z.ZodType<Prisma.AgencyInclude> = z.object({
  users: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  listings: z.union([z.boolean(),z.lazy(() => ListingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AgencyCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const AgencyArgsSchema: z.ZodType<Prisma.AgencyDefaultArgs> = z.object({
  select: z.lazy(() => AgencySelectSchema).optional(),
  include: z.lazy(() => AgencyIncludeSchema).optional(),
}).strict();

export const AgencyCountOutputTypeArgsSchema: z.ZodType<Prisma.AgencyCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => AgencyCountOutputTypeSelectSchema).nullish(),
}).strict();

export const AgencyCountOutputTypeSelectSchema: z.ZodType<Prisma.AgencyCountOutputTypeSelect> = z.object({
  users: z.boolean().optional(),
  listings: z.boolean().optional(),
}).strict();

export const AgencySelectSchema: z.ZodType<Prisma.AgencySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  users: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  listings: z.union([z.boolean(),z.lazy(() => ListingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AgencyCountOutputTypeArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  agency: z.union([z.boolean(),z.lazy(() => AgencyArgsSchema)]).optional(),
  listings: z.union([z.boolean(),z.lazy(() => ListingFindManyArgsSchema)]).optional(),
  comments: z.union([z.boolean(),z.lazy(() => CommentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  listings: z.boolean().optional(),
  comments: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  phone: z.boolean().optional(),
  tel: z.boolean().optional(),
  profileImage: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  agencyId: z.boolean().optional(),
  agency: z.union([z.boolean(),z.lazy(() => AgencyArgsSchema)]).optional(),
  listings: z.union([z.boolean(),z.lazy(() => ListingFindManyArgsSchema)]).optional(),
  comments: z.union([z.boolean(),z.lazy(() => CommentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// LISTING
//------------------------------------------------------

export const ListingIncludeSchema: z.ZodType<Prisma.ListingInclude> = z.object({
  agency: z.union([z.boolean(),z.lazy(() => AgencyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  comments: z.union([z.boolean(),z.lazy(() => CommentFindManyArgsSchema)]).optional(),
  landInfo: z.union([z.boolean(),z.lazy(() => LandInfoArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ListingCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ListingArgsSchema: z.ZodType<Prisma.ListingDefaultArgs> = z.object({
  select: z.lazy(() => ListingSelectSchema).optional(),
  include: z.lazy(() => ListingIncludeSchema).optional(),
}).strict();

export const ListingCountOutputTypeArgsSchema: z.ZodType<Prisma.ListingCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ListingCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ListingCountOutputTypeSelectSchema: z.ZodType<Prisma.ListingCountOutputTypeSelect> = z.object({
  comments: z.boolean().optional(),
}).strict();

export const ListingSelectSchema: z.ZodType<Prisma.ListingSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  listingType: z.boolean().optional(),
  location: z.boolean().optional(),
  roadAddress: z.boolean().optional(),
  buildingName: z.boolean().optional(),
  internalManagementId: z.boolean().optional(),
  currentStatus: z.boolean().optional(),
  mainCategory: z.boolean().optional(),
  subCategory: z.boolean().optional(),
  label: z.boolean().optional(),
  isHidden: z.boolean().optional(),
  photos: z.boolean().optional(),
  totalFloors: z.boolean().optional(),
  currentFloors: z.boolean().optional(),
  landArea: z.boolean().optional(),
  totalFloorArea: z.boolean().optional(),
  buildingArea: z.boolean().optional(),
  grossFloorAreaForFAR: z.boolean().optional(),
  primaryUsage: z.boolean().optional(),
  primaryStructure: z.boolean().optional(),
  elevator: z.boolean().optional(),
  parking: z.boolean().optional(),
  roadWidth: z.boolean().optional(),
  additionalUsage: z.boolean().optional(),
  buildingHeight: z.boolean().optional(),
  roofStructure: z.boolean().optional(),
  numberOfHouseholds: z.boolean().optional(),
  approvalDate: z.boolean().optional(),
  constructionStartDate: z.boolean().optional(),
  occupancyApprovalDate: z.boolean().optional(),
  renovationDate: z.boolean().optional(),
  rentalUsage: z.boolean().optional(),
  rentalArea: z.boolean().optional(),
  exclusiveArea: z.boolean().optional(),
  heating: z.boolean().optional(),
  deposit: z.boolean().optional(),
  monthlyRent: z.boolean().optional(),
  fixedMonthlyCost: z.boolean().optional(),
  maintenanceFeeRental: z.boolean().optional(),
  tax: z.boolean().optional(),
  purchasePrice: z.boolean().optional(),
  depositPrice: z.boolean().optional(),
  yield: z.boolean().optional(),
  averagePrice: z.boolean().optional(),
  securityDeposit: z.boolean().optional(),
  monthlyRentSale: z.boolean().optional(),
  maintenanceFeeSale: z.boolean().optional(),
  loanStatus: z.boolean().optional(),
  agencyId: z.boolean().optional(),
  userId: z.boolean().optional(),
  agency: z.union([z.boolean(),z.lazy(() => AgencyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  comments: z.union([z.boolean(),z.lazy(() => CommentFindManyArgsSchema)]).optional(),
  landInfo: z.union([z.boolean(),z.lazy(() => LandInfoArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ListingCountOutputTypeArgsSchema)]).optional(),
}).strict()

// LAND INFO
//------------------------------------------------------

export const LandInfoIncludeSchema: z.ZodType<Prisma.LandInfoInclude> = z.object({
  listing: z.union([z.boolean(),z.lazy(() => ListingArgsSchema)]).optional(),
}).strict()

export const LandInfoArgsSchema: z.ZodType<Prisma.LandInfoDefaultArgs> = z.object({
  select: z.lazy(() => LandInfoSelectSchema).optional(),
  include: z.lazy(() => LandInfoIncludeSchema).optional(),
}).strict();

export const LandInfoSelectSchema: z.ZodType<Prisma.LandInfoSelect> = z.object({
  id: z.boolean().optional(),
  listingId: z.boolean().optional(),
  lotNumber: z.boolean().optional(),
  landAreaSqm: z.boolean().optional(),
  appraisedPricePerSqm: z.boolean().optional(),
  landCategory: z.boolean().optional(),
  zoningArea: z.boolean().optional(),
  usageStatus: z.boolean().optional(),
  ownershipType: z.boolean().optional(),
  ownershipChangeDate: z.boolean().optional(),
  ownershipChangeReason: z.boolean().optional(),
  roadContactType: z.boolean().optional(),
  topography: z.boolean().optional(),
  landShape: z.boolean().optional(),
  nationalLandUsePlan: z.boolean().optional(),
  nationalLandUsePlanStatus: z.boolean().optional(),
  otherLandUsePlan: z.boolean().optional(),
  otherLandUsePlanStatus: z.boolean().optional(),
  listing: z.union([z.boolean(),z.lazy(() => ListingArgsSchema)]).optional(),
}).strict()

// COMMENT
//------------------------------------------------------

export const CommentIncludeSchema: z.ZodType<Prisma.CommentInclude> = z.object({
  listing: z.union([z.boolean(),z.lazy(() => ListingArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const CommentArgsSchema: z.ZodType<Prisma.CommentDefaultArgs> = z.object({
  select: z.lazy(() => CommentSelectSchema).optional(),
  include: z.lazy(() => CommentIncludeSchema).optional(),
}).strict();

export const CommentSelectSchema: z.ZodType<Prisma.CommentSelect> = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  recordType: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  listingId: z.boolean().optional(),
  userId: z.boolean().optional(),
  listing: z.union([z.boolean(),z.lazy(() => ListingArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const AgencyWhereInputSchema: z.ZodType<Prisma.AgencyWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AgencyWhereInputSchema),z.lazy(() => AgencyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AgencyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AgencyWhereInputSchema),z.lazy(() => AgencyWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  users: z.lazy(() => UserListRelationFilterSchema).optional(),
  listings: z.lazy(() => ListingListRelationFilterSchema).optional()
}).strict();

export const AgencyOrderByWithRelationInputSchema: z.ZodType<Prisma.AgencyOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  users: z.lazy(() => UserOrderByRelationAggregateInputSchema).optional(),
  listings: z.lazy(() => ListingOrderByRelationAggregateInputSchema).optional()
}).strict();

export const AgencyWhereUniqueInputSchema: z.ZodType<Prisma.AgencyWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => AgencyWhereInputSchema),z.lazy(() => AgencyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AgencyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AgencyWhereInputSchema),z.lazy(() => AgencyWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  users: z.lazy(() => UserListRelationFilterSchema).optional(),
  listings: z.lazy(() => ListingListRelationFilterSchema).optional()
}).strict());

export const AgencyOrderByWithAggregationInputSchema: z.ZodType<Prisma.AgencyOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AgencyCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AgencyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AgencyMinOrderByAggregateInputSchema).optional()
}).strict();

export const AgencyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AgencyScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AgencyScalarWhereWithAggregatesInputSchema),z.lazy(() => AgencyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AgencyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AgencyScalarWhereWithAggregatesInputSchema),z.lazy(() => AgencyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  profileImage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  agencyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  agency: z.union([ z.lazy(() => AgencyScalarRelationFilterSchema),z.lazy(() => AgencyWhereInputSchema) ]).optional(),
  listings: z.lazy(() => ListingListRelationFilterSchema).optional(),
  comments: z.lazy(() => CommentListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  phone: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tel: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  profileImage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  agencyId: z.lazy(() => SortOrderSchema).optional(),
  agency: z.lazy(() => AgencyOrderByWithRelationInputSchema).optional(),
  listings: z.lazy(() => ListingOrderByRelationAggregateInputSchema).optional(),
  comments: z.lazy(() => CommentOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    email: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  profileImage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  agencyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  agency: z.union([ z.lazy(() => AgencyScalarRelationFilterSchema),z.lazy(() => AgencyWhereInputSchema) ]).optional(),
  listings: z.lazy(() => ListingListRelationFilterSchema).optional(),
  comments: z.lazy(() => CommentListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  phone: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tel: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  profileImage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  agencyId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  tel: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  profileImage: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  agencyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ListingWhereInputSchema: z.ZodType<Prisma.ListingWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ListingWhereInputSchema),z.lazy(() => ListingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ListingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ListingWhereInputSchema),z.lazy(() => ListingWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  listingType: z.union([ z.lazy(() => EnumListingTypeFilterSchema),z.lazy(() => ListingTypeSchema) ]).optional(),
  location: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roadAddress: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  buildingName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  internalManagementId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  currentStatus: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mainCategory: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  subCategory: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isHidden: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  photos: z.lazy(() => StringNullableListFilterSchema).optional(),
  totalFloors: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  currentFloors: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  landArea: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  totalFloorArea: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  buildingArea: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  grossFloorAreaForFAR: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  primaryUsage: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  primaryStructure: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  elevator: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  parking: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roadWidth: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  additionalUsage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  buildingHeight: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roofStructure: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  numberOfHouseholds: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  approvalDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  constructionStartDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  occupancyApprovalDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  renovationDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  rentalUsage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  rentalArea: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  exclusiveArea: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  heating: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deposit: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  monthlyRent: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  fixedMonthlyCost: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  maintenanceFeeRental: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  tax: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  purchasePrice: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  depositPrice: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  yield: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  averagePrice: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  securityDeposit: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  monthlyRentSale: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  maintenanceFeeSale: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  loanStatus: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  agencyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  agency: z.union([ z.lazy(() => AgencyScalarRelationFilterSchema),z.lazy(() => AgencyWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  comments: z.lazy(() => CommentListRelationFilterSchema).optional(),
  landInfo: z.union([ z.lazy(() => LandInfoNullableScalarRelationFilterSchema),z.lazy(() => LandInfoWhereInputSchema) ]).optional().nullable(),
}).strict();

export const ListingOrderByWithRelationInputSchema: z.ZodType<Prisma.ListingOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  listingType: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  roadAddress: z.lazy(() => SortOrderSchema).optional(),
  buildingName: z.lazy(() => SortOrderSchema).optional(),
  internalManagementId: z.lazy(() => SortOrderSchema).optional(),
  currentStatus: z.lazy(() => SortOrderSchema).optional(),
  mainCategory: z.lazy(() => SortOrderSchema).optional(),
  subCategory: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  isHidden: z.lazy(() => SortOrderSchema).optional(),
  photos: z.lazy(() => SortOrderSchema).optional(),
  totalFloors: z.lazy(() => SortOrderSchema).optional(),
  currentFloors: z.lazy(() => SortOrderSchema).optional(),
  landArea: z.lazy(() => SortOrderSchema).optional(),
  totalFloorArea: z.lazy(() => SortOrderSchema).optional(),
  buildingArea: z.lazy(() => SortOrderSchema).optional(),
  grossFloorAreaForFAR: z.lazy(() => SortOrderSchema).optional(),
  primaryUsage: z.lazy(() => SortOrderSchema).optional(),
  primaryStructure: z.lazy(() => SortOrderSchema).optional(),
  elevator: z.lazy(() => SortOrderSchema).optional(),
  parking: z.lazy(() => SortOrderSchema).optional(),
  roadWidth: z.lazy(() => SortOrderSchema).optional(),
  additionalUsage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  buildingHeight: z.lazy(() => SortOrderSchema).optional(),
  roofStructure: z.lazy(() => SortOrderSchema).optional(),
  numberOfHouseholds: z.lazy(() => SortOrderSchema).optional(),
  approvalDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  constructionStartDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  occupancyApprovalDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  renovationDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rentalUsage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rentalArea: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  exclusiveArea: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  heating: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  deposit: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  monthlyRent: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  fixedMonthlyCost: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  maintenanceFeeRental: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tax: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  purchasePrice: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  depositPrice: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  yield: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  averagePrice: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  securityDeposit: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  monthlyRentSale: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  maintenanceFeeSale: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  loanStatus: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  agencyId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  agency: z.lazy(() => AgencyOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  comments: z.lazy(() => CommentOrderByRelationAggregateInputSchema).optional(),
  landInfo: z.lazy(() => LandInfoOrderByWithRelationInputSchema).optional()
}).strict();

export const ListingWhereUniqueInputSchema: z.ZodType<Prisma.ListingWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => ListingWhereInputSchema),z.lazy(() => ListingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ListingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ListingWhereInputSchema),z.lazy(() => ListingWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  listingType: z.union([ z.lazy(() => EnumListingTypeFilterSchema),z.lazy(() => ListingTypeSchema) ]).optional(),
  location: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roadAddress: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  buildingName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  internalManagementId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  currentStatus: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mainCategory: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  subCategory: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isHidden: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  photos: z.lazy(() => StringNullableListFilterSchema).optional(),
  totalFloors: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  currentFloors: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  landArea: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  totalFloorArea: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  buildingArea: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  grossFloorAreaForFAR: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  primaryUsage: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  primaryStructure: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  elevator: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  parking: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roadWidth: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  additionalUsage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  buildingHeight: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roofStructure: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  numberOfHouseholds: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  approvalDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  constructionStartDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  occupancyApprovalDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  renovationDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  rentalUsage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  rentalArea: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  exclusiveArea: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  heating: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deposit: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  monthlyRent: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  fixedMonthlyCost: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  maintenanceFeeRental: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  tax: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  purchasePrice: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  depositPrice: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  yield: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  averagePrice: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  securityDeposit: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  monthlyRentSale: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  maintenanceFeeSale: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  loanStatus: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  agencyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  agency: z.union([ z.lazy(() => AgencyScalarRelationFilterSchema),z.lazy(() => AgencyWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  comments: z.lazy(() => CommentListRelationFilterSchema).optional(),
  landInfo: z.union([ z.lazy(() => LandInfoNullableScalarRelationFilterSchema),z.lazy(() => LandInfoWhereInputSchema) ]).optional().nullable(),
}).strict());

export const ListingOrderByWithAggregationInputSchema: z.ZodType<Prisma.ListingOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  listingType: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  roadAddress: z.lazy(() => SortOrderSchema).optional(),
  buildingName: z.lazy(() => SortOrderSchema).optional(),
  internalManagementId: z.lazy(() => SortOrderSchema).optional(),
  currentStatus: z.lazy(() => SortOrderSchema).optional(),
  mainCategory: z.lazy(() => SortOrderSchema).optional(),
  subCategory: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  isHidden: z.lazy(() => SortOrderSchema).optional(),
  photos: z.lazy(() => SortOrderSchema).optional(),
  totalFloors: z.lazy(() => SortOrderSchema).optional(),
  currentFloors: z.lazy(() => SortOrderSchema).optional(),
  landArea: z.lazy(() => SortOrderSchema).optional(),
  totalFloorArea: z.lazy(() => SortOrderSchema).optional(),
  buildingArea: z.lazy(() => SortOrderSchema).optional(),
  grossFloorAreaForFAR: z.lazy(() => SortOrderSchema).optional(),
  primaryUsage: z.lazy(() => SortOrderSchema).optional(),
  primaryStructure: z.lazy(() => SortOrderSchema).optional(),
  elevator: z.lazy(() => SortOrderSchema).optional(),
  parking: z.lazy(() => SortOrderSchema).optional(),
  roadWidth: z.lazy(() => SortOrderSchema).optional(),
  additionalUsage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  buildingHeight: z.lazy(() => SortOrderSchema).optional(),
  roofStructure: z.lazy(() => SortOrderSchema).optional(),
  numberOfHouseholds: z.lazy(() => SortOrderSchema).optional(),
  approvalDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  constructionStartDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  occupancyApprovalDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  renovationDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rentalUsage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rentalArea: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  exclusiveArea: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  heating: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  deposit: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  monthlyRent: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  fixedMonthlyCost: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  maintenanceFeeRental: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tax: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  purchasePrice: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  depositPrice: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  yield: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  averagePrice: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  securityDeposit: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  monthlyRentSale: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  maintenanceFeeSale: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  loanStatus: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  agencyId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ListingCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ListingAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ListingMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ListingMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ListingSumOrderByAggregateInputSchema).optional()
}).strict();

export const ListingScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ListingScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ListingScalarWhereWithAggregatesInputSchema),z.lazy(() => ListingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ListingScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ListingScalarWhereWithAggregatesInputSchema),z.lazy(() => ListingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  listingType: z.union([ z.lazy(() => EnumListingTypeWithAggregatesFilterSchema),z.lazy(() => ListingTypeSchema) ]).optional(),
  location: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  roadAddress: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  buildingName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  internalManagementId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  currentStatus: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  mainCategory: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  subCategory: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  isHidden: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  photos: z.lazy(() => StringNullableListFilterSchema).optional(),
  totalFloors: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  currentFloors: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  landArea: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  totalFloorArea: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  buildingArea: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  grossFloorAreaForFAR: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  primaryUsage: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  primaryStructure: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  elevator: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  parking: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  roadWidth: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  additionalUsage: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  buildingHeight: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  roofStructure: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  numberOfHouseholds: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  approvalDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  constructionStartDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  occupancyApprovalDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  renovationDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  rentalUsage: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  rentalArea: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  exclusiveArea: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  heating: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  deposit: z.union([ z.lazy(() => BigIntNullableWithAggregatesFilterSchema),z.bigint() ]).optional().nullable(),
  monthlyRent: z.union([ z.lazy(() => BigIntNullableWithAggregatesFilterSchema),z.bigint() ]).optional().nullable(),
  fixedMonthlyCost: z.union([ z.lazy(() => BigIntNullableWithAggregatesFilterSchema),z.bigint() ]).optional().nullable(),
  maintenanceFeeRental: z.union([ z.lazy(() => BigIntNullableWithAggregatesFilterSchema),z.bigint() ]).optional().nullable(),
  tax: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  purchasePrice: z.union([ z.lazy(() => BigIntNullableWithAggregatesFilterSchema),z.bigint() ]).optional().nullable(),
  depositPrice: z.union([ z.lazy(() => BigIntNullableWithAggregatesFilterSchema),z.bigint() ]).optional().nullable(),
  yield: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  averagePrice: z.union([ z.lazy(() => BigIntNullableWithAggregatesFilterSchema),z.bigint() ]).optional().nullable(),
  securityDeposit: z.union([ z.lazy(() => BigIntNullableWithAggregatesFilterSchema),z.bigint() ]).optional().nullable(),
  monthlyRentSale: z.union([ z.lazy(() => BigIntNullableWithAggregatesFilterSchema),z.bigint() ]).optional().nullable(),
  maintenanceFeeSale: z.union([ z.lazy(() => BigIntNullableWithAggregatesFilterSchema),z.bigint() ]).optional().nullable(),
  loanStatus: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  agencyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const LandInfoWhereInputSchema: z.ZodType<Prisma.LandInfoWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LandInfoWhereInputSchema),z.lazy(() => LandInfoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LandInfoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LandInfoWhereInputSchema),z.lazy(() => LandInfoWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  listingId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lotNumber: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  landAreaSqm: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  appraisedPricePerSqm: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  landCategory: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  zoningArea: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  usageStatus: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ownershipType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ownershipChangeDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  ownershipChangeReason: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  roadContactType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  topography: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  landShape: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nationalLandUsePlan: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nationalLandUsePlanStatus: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  otherLandUsePlan: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  otherLandUsePlanStatus: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  listing: z.union([ z.lazy(() => ListingScalarRelationFilterSchema),z.lazy(() => ListingWhereInputSchema) ]).optional(),
}).strict();

export const LandInfoOrderByWithRelationInputSchema: z.ZodType<Prisma.LandInfoOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  listingId: z.lazy(() => SortOrderSchema).optional(),
  lotNumber: z.lazy(() => SortOrderSchema).optional(),
  landAreaSqm: z.lazy(() => SortOrderSchema).optional(),
  appraisedPricePerSqm: z.lazy(() => SortOrderSchema).optional(),
  landCategory: z.lazy(() => SortOrderSchema).optional(),
  zoningArea: z.lazy(() => SortOrderSchema).optional(),
  usageStatus: z.lazy(() => SortOrderSchema).optional(),
  ownershipType: z.lazy(() => SortOrderSchema).optional(),
  ownershipChangeDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ownershipChangeReason: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  roadContactType: z.lazy(() => SortOrderSchema).optional(),
  topography: z.lazy(() => SortOrderSchema).optional(),
  landShape: z.lazy(() => SortOrderSchema).optional(),
  nationalLandUsePlan: z.lazy(() => SortOrderSchema).optional(),
  nationalLandUsePlanStatus: z.lazy(() => SortOrderSchema).optional(),
  otherLandUsePlan: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  otherLandUsePlanStatus: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  listing: z.lazy(() => ListingOrderByWithRelationInputSchema).optional()
}).strict();

export const LandInfoWhereUniqueInputSchema: z.ZodType<Prisma.LandInfoWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    listingId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    listingId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  listingId: z.string().optional(),
  AND: z.union([ z.lazy(() => LandInfoWhereInputSchema),z.lazy(() => LandInfoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LandInfoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LandInfoWhereInputSchema),z.lazy(() => LandInfoWhereInputSchema).array() ]).optional(),
  lotNumber: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  landAreaSqm: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  appraisedPricePerSqm: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  landCategory: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  zoningArea: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  usageStatus: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ownershipType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ownershipChangeDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  ownershipChangeReason: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  roadContactType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  topography: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  landShape: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nationalLandUsePlan: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nationalLandUsePlanStatus: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  otherLandUsePlan: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  otherLandUsePlanStatus: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  listing: z.union([ z.lazy(() => ListingScalarRelationFilterSchema),z.lazy(() => ListingWhereInputSchema) ]).optional(),
}).strict());

export const LandInfoOrderByWithAggregationInputSchema: z.ZodType<Prisma.LandInfoOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  listingId: z.lazy(() => SortOrderSchema).optional(),
  lotNumber: z.lazy(() => SortOrderSchema).optional(),
  landAreaSqm: z.lazy(() => SortOrderSchema).optional(),
  appraisedPricePerSqm: z.lazy(() => SortOrderSchema).optional(),
  landCategory: z.lazy(() => SortOrderSchema).optional(),
  zoningArea: z.lazy(() => SortOrderSchema).optional(),
  usageStatus: z.lazy(() => SortOrderSchema).optional(),
  ownershipType: z.lazy(() => SortOrderSchema).optional(),
  ownershipChangeDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ownershipChangeReason: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  roadContactType: z.lazy(() => SortOrderSchema).optional(),
  topography: z.lazy(() => SortOrderSchema).optional(),
  landShape: z.lazy(() => SortOrderSchema).optional(),
  nationalLandUsePlan: z.lazy(() => SortOrderSchema).optional(),
  nationalLandUsePlanStatus: z.lazy(() => SortOrderSchema).optional(),
  otherLandUsePlan: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  otherLandUsePlanStatus: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => LandInfoCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LandInfoAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LandInfoMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LandInfoMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LandInfoSumOrderByAggregateInputSchema).optional()
}).strict();

export const LandInfoScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LandInfoScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LandInfoScalarWhereWithAggregatesInputSchema),z.lazy(() => LandInfoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LandInfoScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LandInfoScalarWhereWithAggregatesInputSchema),z.lazy(() => LandInfoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  listingId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  lotNumber: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  landAreaSqm: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  appraisedPricePerSqm: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  landCategory: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  zoningArea: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  usageStatus: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  ownershipType: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  ownershipChangeDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  ownershipChangeReason: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  roadContactType: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  topography: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  landShape: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  nationalLandUsePlan: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  nationalLandUsePlanStatus: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  otherLandUsePlan: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  otherLandUsePlanStatus: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const CommentWhereInputSchema: z.ZodType<Prisma.CommentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CommentWhereInputSchema),z.lazy(() => CommentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CommentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CommentWhereInputSchema),z.lazy(() => CommentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  recordType: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  listingId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  listing: z.union([ z.lazy(() => ListingScalarRelationFilterSchema),z.lazy(() => ListingWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const CommentOrderByWithRelationInputSchema: z.ZodType<Prisma.CommentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  recordType: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  listingId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  listing: z.lazy(() => ListingOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const CommentWhereUniqueInputSchema: z.ZodType<Prisma.CommentWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => CommentWhereInputSchema),z.lazy(() => CommentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CommentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CommentWhereInputSchema),z.lazy(() => CommentWhereInputSchema).array() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  recordType: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  listingId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  listing: z.union([ z.lazy(() => ListingScalarRelationFilterSchema),z.lazy(() => ListingWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const CommentOrderByWithAggregationInputSchema: z.ZodType<Prisma.CommentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  recordType: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  listingId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CommentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CommentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CommentMinOrderByAggregateInputSchema).optional()
}).strict();

export const CommentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CommentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CommentScalarWhereWithAggregatesInputSchema),z.lazy(() => CommentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CommentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CommentScalarWhereWithAggregatesInputSchema),z.lazy(() => CommentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  recordType: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  listingId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const AgencyCreateInputSchema: z.ZodType<Prisma.AgencyCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutAgencyInputSchema).optional(),
  listings: z.lazy(() => ListingCreateNestedManyWithoutAgencyInputSchema).optional()
}).strict();

export const AgencyUncheckedCreateInputSchema: z.ZodType<Prisma.AgencyUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutAgencyInputSchema).optional(),
  listings: z.lazy(() => ListingUncheckedCreateNestedManyWithoutAgencyInputSchema).optional()
}).strict();

export const AgencyUpdateInputSchema: z.ZodType<Prisma.AgencyUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUpdateManyWithoutAgencyNestedInputSchema).optional(),
  listings: z.lazy(() => ListingUpdateManyWithoutAgencyNestedInputSchema).optional()
}).strict();

export const AgencyUncheckedUpdateInputSchema: z.ZodType<Prisma.AgencyUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUncheckedUpdateManyWithoutAgencyNestedInputSchema).optional(),
  listings: z.lazy(() => ListingUncheckedUpdateManyWithoutAgencyNestedInputSchema).optional()
}).strict();

export const AgencyCreateManyInputSchema: z.ZodType<Prisma.AgencyCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AgencyUpdateManyMutationInputSchema: z.ZodType<Prisma.AgencyUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AgencyUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AgencyUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  phone: z.string().optional().nullable(),
  tel: z.string().optional().nullable(),
  profileImage: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  agency: z.lazy(() => AgencyCreateNestedOneWithoutUsersInputSchema),
  listings: z.lazy(() => ListingCreateNestedManyWithoutUserInputSchema).optional(),
  comments: z.lazy(() => CommentCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  phone: z.string().optional().nullable(),
  tel: z.string().optional().nullable(),
  profileImage: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  agencyId: z.string(),
  listings: z.lazy(() => ListingUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tel: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  agency: z.lazy(() => AgencyUpdateOneRequiredWithoutUsersNestedInputSchema).optional(),
  listings: z.lazy(() => ListingUpdateManyWithoutUserNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tel: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  agencyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  listings: z.lazy(() => ListingUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  phone: z.string().optional().nullable(),
  tel: z.string().optional().nullable(),
  profileImage: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  agencyId: z.string()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tel: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tel: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  agencyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ListingCreateInputSchema: z.ZodType<Prisma.ListingCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listingType: z.lazy(() => ListingTypeSchema),
  location: z.string(),
  roadAddress: z.string(),
  buildingName: z.string(),
  internalManagementId: z.string(),
  currentStatus: z.string(),
  mainCategory: z.string(),
  subCategory: z.string(),
  label: z.string(),
  isHidden: z.boolean().optional(),
  photos: z.union([ z.lazy(() => ListingCreatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.number().int(),
  currentFloors: z.string(),
  landArea: z.number(),
  totalFloorArea: z.number(),
  buildingArea: z.number(),
  grossFloorAreaForFAR: z.number(),
  primaryUsage: z.string(),
  primaryStructure: z.string(),
  elevator: z.string(),
  parking: z.string(),
  roadWidth: z.string(),
  additionalUsage: z.string().optional().nullable(),
  buildingHeight: z.string(),
  roofStructure: z.string(),
  numberOfHouseholds: z.number().int(),
  approvalDate: z.coerce.date().optional().nullable(),
  constructionStartDate: z.coerce.date().optional().nullable(),
  occupancyApprovalDate: z.coerce.date().optional().nullable(),
  renovationDate: z.coerce.date().optional().nullable(),
  rentalUsage: z.string().optional().nullable(),
  rentalArea: z.number().optional().nullable(),
  exclusiveArea: z.number().optional().nullable(),
  heating: z.string().optional().nullable(),
  deposit: z.bigint().optional().nullable(),
  monthlyRent: z.bigint().optional().nullable(),
  fixedMonthlyCost: z.bigint().optional().nullable(),
  maintenanceFeeRental: z.bigint().optional().nullable(),
  tax: z.boolean().optional().nullable(),
  purchasePrice: z.bigint().optional().nullable(),
  depositPrice: z.bigint().optional().nullable(),
  yield: z.number().optional().nullable(),
  averagePrice: z.bigint().optional().nullable(),
  securityDeposit: z.bigint().optional().nullable(),
  monthlyRentSale: z.bigint().optional().nullable(),
  maintenanceFeeSale: z.bigint().optional().nullable(),
  loanStatus: z.string().optional().nullable(),
  agency: z.lazy(() => AgencyCreateNestedOneWithoutListingsInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutListingsInputSchema),
  comments: z.lazy(() => CommentCreateNestedManyWithoutListingInputSchema).optional(),
  landInfo: z.lazy(() => LandInfoCreateNestedOneWithoutListingInputSchema).optional()
}).strict();

export const ListingUncheckedCreateInputSchema: z.ZodType<Prisma.ListingUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listingType: z.lazy(() => ListingTypeSchema),
  location: z.string(),
  roadAddress: z.string(),
  buildingName: z.string(),
  internalManagementId: z.string(),
  currentStatus: z.string(),
  mainCategory: z.string(),
  subCategory: z.string(),
  label: z.string(),
  isHidden: z.boolean().optional(),
  photos: z.union([ z.lazy(() => ListingCreatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.number().int(),
  currentFloors: z.string(),
  landArea: z.number(),
  totalFloorArea: z.number(),
  buildingArea: z.number(),
  grossFloorAreaForFAR: z.number(),
  primaryUsage: z.string(),
  primaryStructure: z.string(),
  elevator: z.string(),
  parking: z.string(),
  roadWidth: z.string(),
  additionalUsage: z.string().optional().nullable(),
  buildingHeight: z.string(),
  roofStructure: z.string(),
  numberOfHouseholds: z.number().int(),
  approvalDate: z.coerce.date().optional().nullable(),
  constructionStartDate: z.coerce.date().optional().nullable(),
  occupancyApprovalDate: z.coerce.date().optional().nullable(),
  renovationDate: z.coerce.date().optional().nullable(),
  rentalUsage: z.string().optional().nullable(),
  rentalArea: z.number().optional().nullable(),
  exclusiveArea: z.number().optional().nullable(),
  heating: z.string().optional().nullable(),
  deposit: z.bigint().optional().nullable(),
  monthlyRent: z.bigint().optional().nullable(),
  fixedMonthlyCost: z.bigint().optional().nullable(),
  maintenanceFeeRental: z.bigint().optional().nullable(),
  tax: z.boolean().optional().nullable(),
  purchasePrice: z.bigint().optional().nullable(),
  depositPrice: z.bigint().optional().nullable(),
  yield: z.number().optional().nullable(),
  averagePrice: z.bigint().optional().nullable(),
  securityDeposit: z.bigint().optional().nullable(),
  monthlyRentSale: z.bigint().optional().nullable(),
  maintenanceFeeSale: z.bigint().optional().nullable(),
  loanStatus: z.string().optional().nullable(),
  agencyId: z.string(),
  userId: z.string(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutListingInputSchema).optional(),
  landInfo: z.lazy(() => LandInfoUncheckedCreateNestedOneWithoutListingInputSchema).optional()
}).strict();

export const ListingUpdateInputSchema: z.ZodType<Prisma.ListingUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listingType: z.union([ z.lazy(() => ListingTypeSchema),z.lazy(() => EnumListingTypeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadAddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  buildingName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  internalManagementId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mainCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  subCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isHidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  photos: z.union([ z.lazy(() => ListingUpdatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  currentFloors: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  totalFloorArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  buildingArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  grossFloorAreaForFAR: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  primaryUsage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  primaryStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  elevator: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parking: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadWidth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  additionalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  buildingHeight: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roofStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  numberOfHouseholds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approvalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  constructionStartDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  occupancyApprovalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  renovationDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  exclusiveArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  heating: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRent: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fixedMonthlyCost: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeRental: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tax: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchasePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  depositPrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  yield: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  averagePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  securityDeposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRentSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loanStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  agency: z.lazy(() => AgencyUpdateOneRequiredWithoutListingsNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutListingsNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutListingNestedInputSchema).optional(),
  landInfo: z.lazy(() => LandInfoUpdateOneWithoutListingNestedInputSchema).optional()
}).strict();

export const ListingUncheckedUpdateInputSchema: z.ZodType<Prisma.ListingUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listingType: z.union([ z.lazy(() => ListingTypeSchema),z.lazy(() => EnumListingTypeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadAddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  buildingName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  internalManagementId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mainCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  subCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isHidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  photos: z.union([ z.lazy(() => ListingUpdatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  currentFloors: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  totalFloorArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  buildingArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  grossFloorAreaForFAR: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  primaryUsage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  primaryStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  elevator: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parking: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadWidth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  additionalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  buildingHeight: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roofStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  numberOfHouseholds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approvalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  constructionStartDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  occupancyApprovalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  renovationDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  exclusiveArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  heating: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRent: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fixedMonthlyCost: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeRental: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tax: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchasePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  depositPrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  yield: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  averagePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  securityDeposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRentSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loanStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  agencyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutListingNestedInputSchema).optional(),
  landInfo: z.lazy(() => LandInfoUncheckedUpdateOneWithoutListingNestedInputSchema).optional()
}).strict();

export const ListingCreateManyInputSchema: z.ZodType<Prisma.ListingCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listingType: z.lazy(() => ListingTypeSchema),
  location: z.string(),
  roadAddress: z.string(),
  buildingName: z.string(),
  internalManagementId: z.string(),
  currentStatus: z.string(),
  mainCategory: z.string(),
  subCategory: z.string(),
  label: z.string(),
  isHidden: z.boolean().optional(),
  photos: z.union([ z.lazy(() => ListingCreatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.number().int(),
  currentFloors: z.string(),
  landArea: z.number(),
  totalFloorArea: z.number(),
  buildingArea: z.number(),
  grossFloorAreaForFAR: z.number(),
  primaryUsage: z.string(),
  primaryStructure: z.string(),
  elevator: z.string(),
  parking: z.string(),
  roadWidth: z.string(),
  additionalUsage: z.string().optional().nullable(),
  buildingHeight: z.string(),
  roofStructure: z.string(),
  numberOfHouseholds: z.number().int(),
  approvalDate: z.coerce.date().optional().nullable(),
  constructionStartDate: z.coerce.date().optional().nullable(),
  occupancyApprovalDate: z.coerce.date().optional().nullable(),
  renovationDate: z.coerce.date().optional().nullable(),
  rentalUsage: z.string().optional().nullable(),
  rentalArea: z.number().optional().nullable(),
  exclusiveArea: z.number().optional().nullable(),
  heating: z.string().optional().nullable(),
  deposit: z.bigint().optional().nullable(),
  monthlyRent: z.bigint().optional().nullable(),
  fixedMonthlyCost: z.bigint().optional().nullable(),
  maintenanceFeeRental: z.bigint().optional().nullable(),
  tax: z.boolean().optional().nullable(),
  purchasePrice: z.bigint().optional().nullable(),
  depositPrice: z.bigint().optional().nullable(),
  yield: z.number().optional().nullable(),
  averagePrice: z.bigint().optional().nullable(),
  securityDeposit: z.bigint().optional().nullable(),
  monthlyRentSale: z.bigint().optional().nullable(),
  maintenanceFeeSale: z.bigint().optional().nullable(),
  loanStatus: z.string().optional().nullable(),
  agencyId: z.string(),
  userId: z.string()
}).strict();

export const ListingUpdateManyMutationInputSchema: z.ZodType<Prisma.ListingUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listingType: z.union([ z.lazy(() => ListingTypeSchema),z.lazy(() => EnumListingTypeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadAddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  buildingName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  internalManagementId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mainCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  subCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isHidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  photos: z.union([ z.lazy(() => ListingUpdatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  currentFloors: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  totalFloorArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  buildingArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  grossFloorAreaForFAR: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  primaryUsage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  primaryStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  elevator: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parking: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadWidth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  additionalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  buildingHeight: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roofStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  numberOfHouseholds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approvalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  constructionStartDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  occupancyApprovalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  renovationDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  exclusiveArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  heating: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRent: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fixedMonthlyCost: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeRental: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tax: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchasePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  depositPrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  yield: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  averagePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  securityDeposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRentSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loanStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ListingUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ListingUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listingType: z.union([ z.lazy(() => ListingTypeSchema),z.lazy(() => EnumListingTypeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadAddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  buildingName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  internalManagementId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mainCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  subCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isHidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  photos: z.union([ z.lazy(() => ListingUpdatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  currentFloors: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  totalFloorArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  buildingArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  grossFloorAreaForFAR: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  primaryUsage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  primaryStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  elevator: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parking: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadWidth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  additionalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  buildingHeight: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roofStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  numberOfHouseholds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approvalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  constructionStartDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  occupancyApprovalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  renovationDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  exclusiveArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  heating: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRent: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fixedMonthlyCost: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeRental: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tax: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchasePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  depositPrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  yield: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  averagePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  securityDeposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRentSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loanStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  agencyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LandInfoCreateInputSchema: z.ZodType<Prisma.LandInfoCreateInput> = z.object({
  id: z.string().cuid().optional(),
  lotNumber: z.string(),
  landAreaSqm: z.number(),
  appraisedPricePerSqm: z.bigint(),
  landCategory: z.string(),
  zoningArea: z.string(),
  usageStatus: z.string(),
  ownershipType: z.string(),
  ownershipChangeDate: z.coerce.date().optional().nullable(),
  ownershipChangeReason: z.string().optional().nullable(),
  roadContactType: z.string(),
  topography: z.string(),
  landShape: z.string(),
  nationalLandUsePlan: z.string(),
  nationalLandUsePlanStatus: z.string(),
  otherLandUsePlan: z.string().optional().nullable(),
  otherLandUsePlanStatus: z.string().optional().nullable(),
  listing: z.lazy(() => ListingCreateNestedOneWithoutLandInfoInputSchema)
}).strict();

export const LandInfoUncheckedCreateInputSchema: z.ZodType<Prisma.LandInfoUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  listingId: z.string(),
  lotNumber: z.string(),
  landAreaSqm: z.number(),
  appraisedPricePerSqm: z.bigint(),
  landCategory: z.string(),
  zoningArea: z.string(),
  usageStatus: z.string(),
  ownershipType: z.string(),
  ownershipChangeDate: z.coerce.date().optional().nullable(),
  ownershipChangeReason: z.string().optional().nullable(),
  roadContactType: z.string(),
  topography: z.string(),
  landShape: z.string(),
  nationalLandUsePlan: z.string(),
  nationalLandUsePlanStatus: z.string(),
  otherLandUsePlan: z.string().optional().nullable(),
  otherLandUsePlanStatus: z.string().optional().nullable()
}).strict();

export const LandInfoUpdateInputSchema: z.ZodType<Prisma.LandInfoUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lotNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landAreaSqm: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  appraisedPricePerSqm: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  landCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  zoningArea: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  usageStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownershipType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownershipChangeDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownershipChangeReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roadContactType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  topography: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landShape: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nationalLandUsePlan: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nationalLandUsePlanStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  otherLandUsePlan: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  otherLandUsePlanStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  listing: z.lazy(() => ListingUpdateOneRequiredWithoutLandInfoNestedInputSchema).optional()
}).strict();

export const LandInfoUncheckedUpdateInputSchema: z.ZodType<Prisma.LandInfoUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  listingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lotNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landAreaSqm: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  appraisedPricePerSqm: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  landCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  zoningArea: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  usageStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownershipType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownershipChangeDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownershipChangeReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roadContactType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  topography: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landShape: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nationalLandUsePlan: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nationalLandUsePlanStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  otherLandUsePlan: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  otherLandUsePlanStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const LandInfoCreateManyInputSchema: z.ZodType<Prisma.LandInfoCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  listingId: z.string(),
  lotNumber: z.string(),
  landAreaSqm: z.number(),
  appraisedPricePerSqm: z.bigint(),
  landCategory: z.string(),
  zoningArea: z.string(),
  usageStatus: z.string(),
  ownershipType: z.string(),
  ownershipChangeDate: z.coerce.date().optional().nullable(),
  ownershipChangeReason: z.string().optional().nullable(),
  roadContactType: z.string(),
  topography: z.string(),
  landShape: z.string(),
  nationalLandUsePlan: z.string(),
  nationalLandUsePlanStatus: z.string(),
  otherLandUsePlan: z.string().optional().nullable(),
  otherLandUsePlanStatus: z.string().optional().nullable()
}).strict();

export const LandInfoUpdateManyMutationInputSchema: z.ZodType<Prisma.LandInfoUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lotNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landAreaSqm: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  appraisedPricePerSqm: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  landCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  zoningArea: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  usageStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownershipType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownershipChangeDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownershipChangeReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roadContactType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  topography: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landShape: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nationalLandUsePlan: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nationalLandUsePlanStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  otherLandUsePlan: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  otherLandUsePlanStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const LandInfoUncheckedUpdateManyInputSchema: z.ZodType<Prisma.LandInfoUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  listingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lotNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landAreaSqm: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  appraisedPricePerSqm: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  landCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  zoningArea: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  usageStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownershipType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownershipChangeDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownershipChangeReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roadContactType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  topography: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landShape: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nationalLandUsePlan: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nationalLandUsePlanStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  otherLandUsePlan: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  otherLandUsePlanStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CommentCreateInputSchema: z.ZodType<Prisma.CommentCreateInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  recordType: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listing: z.lazy(() => ListingCreateNestedOneWithoutCommentsInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutCommentsInputSchema)
}).strict();

export const CommentUncheckedCreateInputSchema: z.ZodType<Prisma.CommentUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  recordType: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listingId: z.string(),
  userId: z.string()
}).strict();

export const CommentUpdateInputSchema: z.ZodType<Prisma.CommentUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recordType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listing: z.lazy(() => ListingUpdateOneRequiredWithoutCommentsNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCommentsNestedInputSchema).optional()
}).strict();

export const CommentUncheckedUpdateInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recordType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CommentCreateManyInputSchema: z.ZodType<Prisma.CommentCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  recordType: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listingId: z.string(),
  userId: z.string()
}).strict();

export const CommentUpdateManyMutationInputSchema: z.ZodType<Prisma.CommentUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recordType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CommentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recordType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const UserListRelationFilterSchema: z.ZodType<Prisma.UserListRelationFilter> = z.object({
  every: z.lazy(() => UserWhereInputSchema).optional(),
  some: z.lazy(() => UserWhereInputSchema).optional(),
  none: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const ListingListRelationFilterSchema: z.ZodType<Prisma.ListingListRelationFilter> = z.object({
  every: z.lazy(() => ListingWhereInputSchema).optional(),
  some: z.lazy(() => ListingWhereInputSchema).optional(),
  none: z.lazy(() => ListingWhereInputSchema).optional()
}).strict();

export const UserOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UserOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ListingOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ListingOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AgencyCountOrderByAggregateInputSchema: z.ZodType<Prisma.AgencyCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AgencyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AgencyMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AgencyMinOrderByAggregateInputSchema: z.ZodType<Prisma.AgencyMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const AgencyScalarRelationFilterSchema: z.ZodType<Prisma.AgencyScalarRelationFilter> = z.object({
  is: z.lazy(() => AgencyWhereInputSchema).optional(),
  isNot: z.lazy(() => AgencyWhereInputSchema).optional()
}).strict();

export const CommentListRelationFilterSchema: z.ZodType<Prisma.CommentListRelationFilter> = z.object({
  every: z.lazy(() => CommentWhereInputSchema).optional(),
  some: z.lazy(() => CommentWhereInputSchema).optional(),
  none: z.lazy(() => CommentWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const CommentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CommentOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  tel: z.lazy(() => SortOrderSchema).optional(),
  profileImage: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  agencyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  tel: z.lazy(() => SortOrderSchema).optional(),
  profileImage: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  agencyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  tel: z.lazy(() => SortOrderSchema).optional(),
  profileImage: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  agencyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const EnumListingTypeFilterSchema: z.ZodType<Prisma.EnumListingTypeFilter> = z.object({
  equals: z.lazy(() => ListingTypeSchema).optional(),
  in: z.lazy(() => ListingTypeSchema).array().optional(),
  notIn: z.lazy(() => ListingTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ListingTypeSchema),z.lazy(() => NestedEnumListingTypeFilterSchema) ]).optional(),
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const StringNullableListFilterSchema: z.ZodType<Prisma.StringNullableListFilter> = z.object({
  equals: z.string().array().optional().nullable(),
  has: z.string().optional().nullable(),
  hasEvery: z.string().array().optional(),
  hasSome: z.string().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const FloatNullableFilterSchema: z.ZodType<Prisma.FloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const BigIntNullableFilterSchema: z.ZodType<Prisma.BigIntNullableFilter> = z.object({
  equals: z.bigint().optional().nullable(),
  in: z.bigint().array().optional().nullable(),
  notIn: z.bigint().array().optional().nullable(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const BoolNullableFilterSchema: z.ZodType<Prisma.BoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const UserScalarRelationFilterSchema: z.ZodType<Prisma.UserScalarRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const LandInfoNullableScalarRelationFilterSchema: z.ZodType<Prisma.LandInfoNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => LandInfoWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => LandInfoWhereInputSchema).optional().nullable()
}).strict();

export const ListingCountOrderByAggregateInputSchema: z.ZodType<Prisma.ListingCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  listingType: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  roadAddress: z.lazy(() => SortOrderSchema).optional(),
  buildingName: z.lazy(() => SortOrderSchema).optional(),
  internalManagementId: z.lazy(() => SortOrderSchema).optional(),
  currentStatus: z.lazy(() => SortOrderSchema).optional(),
  mainCategory: z.lazy(() => SortOrderSchema).optional(),
  subCategory: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  isHidden: z.lazy(() => SortOrderSchema).optional(),
  photos: z.lazy(() => SortOrderSchema).optional(),
  totalFloors: z.lazy(() => SortOrderSchema).optional(),
  currentFloors: z.lazy(() => SortOrderSchema).optional(),
  landArea: z.lazy(() => SortOrderSchema).optional(),
  totalFloorArea: z.lazy(() => SortOrderSchema).optional(),
  buildingArea: z.lazy(() => SortOrderSchema).optional(),
  grossFloorAreaForFAR: z.lazy(() => SortOrderSchema).optional(),
  primaryUsage: z.lazy(() => SortOrderSchema).optional(),
  primaryStructure: z.lazy(() => SortOrderSchema).optional(),
  elevator: z.lazy(() => SortOrderSchema).optional(),
  parking: z.lazy(() => SortOrderSchema).optional(),
  roadWidth: z.lazy(() => SortOrderSchema).optional(),
  additionalUsage: z.lazy(() => SortOrderSchema).optional(),
  buildingHeight: z.lazy(() => SortOrderSchema).optional(),
  roofStructure: z.lazy(() => SortOrderSchema).optional(),
  numberOfHouseholds: z.lazy(() => SortOrderSchema).optional(),
  approvalDate: z.lazy(() => SortOrderSchema).optional(),
  constructionStartDate: z.lazy(() => SortOrderSchema).optional(),
  occupancyApprovalDate: z.lazy(() => SortOrderSchema).optional(),
  renovationDate: z.lazy(() => SortOrderSchema).optional(),
  rentalUsage: z.lazy(() => SortOrderSchema).optional(),
  rentalArea: z.lazy(() => SortOrderSchema).optional(),
  exclusiveArea: z.lazy(() => SortOrderSchema).optional(),
  heating: z.lazy(() => SortOrderSchema).optional(),
  deposit: z.lazy(() => SortOrderSchema).optional(),
  monthlyRent: z.lazy(() => SortOrderSchema).optional(),
  fixedMonthlyCost: z.lazy(() => SortOrderSchema).optional(),
  maintenanceFeeRental: z.lazy(() => SortOrderSchema).optional(),
  tax: z.lazy(() => SortOrderSchema).optional(),
  purchasePrice: z.lazy(() => SortOrderSchema).optional(),
  depositPrice: z.lazy(() => SortOrderSchema).optional(),
  yield: z.lazy(() => SortOrderSchema).optional(),
  averagePrice: z.lazy(() => SortOrderSchema).optional(),
  securityDeposit: z.lazy(() => SortOrderSchema).optional(),
  monthlyRentSale: z.lazy(() => SortOrderSchema).optional(),
  maintenanceFeeSale: z.lazy(() => SortOrderSchema).optional(),
  loanStatus: z.lazy(() => SortOrderSchema).optional(),
  agencyId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ListingAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ListingAvgOrderByAggregateInput> = z.object({
  totalFloors: z.lazy(() => SortOrderSchema).optional(),
  landArea: z.lazy(() => SortOrderSchema).optional(),
  totalFloorArea: z.lazy(() => SortOrderSchema).optional(),
  buildingArea: z.lazy(() => SortOrderSchema).optional(),
  grossFloorAreaForFAR: z.lazy(() => SortOrderSchema).optional(),
  numberOfHouseholds: z.lazy(() => SortOrderSchema).optional(),
  rentalArea: z.lazy(() => SortOrderSchema).optional(),
  exclusiveArea: z.lazy(() => SortOrderSchema).optional(),
  deposit: z.lazy(() => SortOrderSchema).optional(),
  monthlyRent: z.lazy(() => SortOrderSchema).optional(),
  fixedMonthlyCost: z.lazy(() => SortOrderSchema).optional(),
  maintenanceFeeRental: z.lazy(() => SortOrderSchema).optional(),
  purchasePrice: z.lazy(() => SortOrderSchema).optional(),
  depositPrice: z.lazy(() => SortOrderSchema).optional(),
  yield: z.lazy(() => SortOrderSchema).optional(),
  averagePrice: z.lazy(() => SortOrderSchema).optional(),
  securityDeposit: z.lazy(() => SortOrderSchema).optional(),
  monthlyRentSale: z.lazy(() => SortOrderSchema).optional(),
  maintenanceFeeSale: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ListingMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ListingMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  listingType: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  roadAddress: z.lazy(() => SortOrderSchema).optional(),
  buildingName: z.lazy(() => SortOrderSchema).optional(),
  internalManagementId: z.lazy(() => SortOrderSchema).optional(),
  currentStatus: z.lazy(() => SortOrderSchema).optional(),
  mainCategory: z.lazy(() => SortOrderSchema).optional(),
  subCategory: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  isHidden: z.lazy(() => SortOrderSchema).optional(),
  totalFloors: z.lazy(() => SortOrderSchema).optional(),
  currentFloors: z.lazy(() => SortOrderSchema).optional(),
  landArea: z.lazy(() => SortOrderSchema).optional(),
  totalFloorArea: z.lazy(() => SortOrderSchema).optional(),
  buildingArea: z.lazy(() => SortOrderSchema).optional(),
  grossFloorAreaForFAR: z.lazy(() => SortOrderSchema).optional(),
  primaryUsage: z.lazy(() => SortOrderSchema).optional(),
  primaryStructure: z.lazy(() => SortOrderSchema).optional(),
  elevator: z.lazy(() => SortOrderSchema).optional(),
  parking: z.lazy(() => SortOrderSchema).optional(),
  roadWidth: z.lazy(() => SortOrderSchema).optional(),
  additionalUsage: z.lazy(() => SortOrderSchema).optional(),
  buildingHeight: z.lazy(() => SortOrderSchema).optional(),
  roofStructure: z.lazy(() => SortOrderSchema).optional(),
  numberOfHouseholds: z.lazy(() => SortOrderSchema).optional(),
  approvalDate: z.lazy(() => SortOrderSchema).optional(),
  constructionStartDate: z.lazy(() => SortOrderSchema).optional(),
  occupancyApprovalDate: z.lazy(() => SortOrderSchema).optional(),
  renovationDate: z.lazy(() => SortOrderSchema).optional(),
  rentalUsage: z.lazy(() => SortOrderSchema).optional(),
  rentalArea: z.lazy(() => SortOrderSchema).optional(),
  exclusiveArea: z.lazy(() => SortOrderSchema).optional(),
  heating: z.lazy(() => SortOrderSchema).optional(),
  deposit: z.lazy(() => SortOrderSchema).optional(),
  monthlyRent: z.lazy(() => SortOrderSchema).optional(),
  fixedMonthlyCost: z.lazy(() => SortOrderSchema).optional(),
  maintenanceFeeRental: z.lazy(() => SortOrderSchema).optional(),
  tax: z.lazy(() => SortOrderSchema).optional(),
  purchasePrice: z.lazy(() => SortOrderSchema).optional(),
  depositPrice: z.lazy(() => SortOrderSchema).optional(),
  yield: z.lazy(() => SortOrderSchema).optional(),
  averagePrice: z.lazy(() => SortOrderSchema).optional(),
  securityDeposit: z.lazy(() => SortOrderSchema).optional(),
  monthlyRentSale: z.lazy(() => SortOrderSchema).optional(),
  maintenanceFeeSale: z.lazy(() => SortOrderSchema).optional(),
  loanStatus: z.lazy(() => SortOrderSchema).optional(),
  agencyId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ListingMinOrderByAggregateInputSchema: z.ZodType<Prisma.ListingMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  listingType: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  roadAddress: z.lazy(() => SortOrderSchema).optional(),
  buildingName: z.lazy(() => SortOrderSchema).optional(),
  internalManagementId: z.lazy(() => SortOrderSchema).optional(),
  currentStatus: z.lazy(() => SortOrderSchema).optional(),
  mainCategory: z.lazy(() => SortOrderSchema).optional(),
  subCategory: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  isHidden: z.lazy(() => SortOrderSchema).optional(),
  totalFloors: z.lazy(() => SortOrderSchema).optional(),
  currentFloors: z.lazy(() => SortOrderSchema).optional(),
  landArea: z.lazy(() => SortOrderSchema).optional(),
  totalFloorArea: z.lazy(() => SortOrderSchema).optional(),
  buildingArea: z.lazy(() => SortOrderSchema).optional(),
  grossFloorAreaForFAR: z.lazy(() => SortOrderSchema).optional(),
  primaryUsage: z.lazy(() => SortOrderSchema).optional(),
  primaryStructure: z.lazy(() => SortOrderSchema).optional(),
  elevator: z.lazy(() => SortOrderSchema).optional(),
  parking: z.lazy(() => SortOrderSchema).optional(),
  roadWidth: z.lazy(() => SortOrderSchema).optional(),
  additionalUsage: z.lazy(() => SortOrderSchema).optional(),
  buildingHeight: z.lazy(() => SortOrderSchema).optional(),
  roofStructure: z.lazy(() => SortOrderSchema).optional(),
  numberOfHouseholds: z.lazy(() => SortOrderSchema).optional(),
  approvalDate: z.lazy(() => SortOrderSchema).optional(),
  constructionStartDate: z.lazy(() => SortOrderSchema).optional(),
  occupancyApprovalDate: z.lazy(() => SortOrderSchema).optional(),
  renovationDate: z.lazy(() => SortOrderSchema).optional(),
  rentalUsage: z.lazy(() => SortOrderSchema).optional(),
  rentalArea: z.lazy(() => SortOrderSchema).optional(),
  exclusiveArea: z.lazy(() => SortOrderSchema).optional(),
  heating: z.lazy(() => SortOrderSchema).optional(),
  deposit: z.lazy(() => SortOrderSchema).optional(),
  monthlyRent: z.lazy(() => SortOrderSchema).optional(),
  fixedMonthlyCost: z.lazy(() => SortOrderSchema).optional(),
  maintenanceFeeRental: z.lazy(() => SortOrderSchema).optional(),
  tax: z.lazy(() => SortOrderSchema).optional(),
  purchasePrice: z.lazy(() => SortOrderSchema).optional(),
  depositPrice: z.lazy(() => SortOrderSchema).optional(),
  yield: z.lazy(() => SortOrderSchema).optional(),
  averagePrice: z.lazy(() => SortOrderSchema).optional(),
  securityDeposit: z.lazy(() => SortOrderSchema).optional(),
  monthlyRentSale: z.lazy(() => SortOrderSchema).optional(),
  maintenanceFeeSale: z.lazy(() => SortOrderSchema).optional(),
  loanStatus: z.lazy(() => SortOrderSchema).optional(),
  agencyId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ListingSumOrderByAggregateInputSchema: z.ZodType<Prisma.ListingSumOrderByAggregateInput> = z.object({
  totalFloors: z.lazy(() => SortOrderSchema).optional(),
  landArea: z.lazy(() => SortOrderSchema).optional(),
  totalFloorArea: z.lazy(() => SortOrderSchema).optional(),
  buildingArea: z.lazy(() => SortOrderSchema).optional(),
  grossFloorAreaForFAR: z.lazy(() => SortOrderSchema).optional(),
  numberOfHouseholds: z.lazy(() => SortOrderSchema).optional(),
  rentalArea: z.lazy(() => SortOrderSchema).optional(),
  exclusiveArea: z.lazy(() => SortOrderSchema).optional(),
  deposit: z.lazy(() => SortOrderSchema).optional(),
  monthlyRent: z.lazy(() => SortOrderSchema).optional(),
  fixedMonthlyCost: z.lazy(() => SortOrderSchema).optional(),
  maintenanceFeeRental: z.lazy(() => SortOrderSchema).optional(),
  purchasePrice: z.lazy(() => SortOrderSchema).optional(),
  depositPrice: z.lazy(() => SortOrderSchema).optional(),
  yield: z.lazy(() => SortOrderSchema).optional(),
  averagePrice: z.lazy(() => SortOrderSchema).optional(),
  securityDeposit: z.lazy(() => SortOrderSchema).optional(),
  monthlyRentSale: z.lazy(() => SortOrderSchema).optional(),
  maintenanceFeeSale: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumListingTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumListingTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ListingTypeSchema).optional(),
  in: z.lazy(() => ListingTypeSchema).array().optional(),
  notIn: z.lazy(() => ListingTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ListingTypeSchema),z.lazy(() => NestedEnumListingTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumListingTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumListingTypeFilterSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const FloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.FloatNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional()
}).strict();

export const BigIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.BigIntNullableWithAggregatesFilter> = z.object({
  equals: z.bigint().optional().nullable(),
  in: z.bigint().array().optional().nullable(),
  notIn: z.bigint().array().optional().nullable(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntNullableFilterSchema).optional()
}).strict();

export const BoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.BoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();

export const BigIntFilterSchema: z.ZodType<Prisma.BigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const ListingScalarRelationFilterSchema: z.ZodType<Prisma.ListingScalarRelationFilter> = z.object({
  is: z.lazy(() => ListingWhereInputSchema).optional(),
  isNot: z.lazy(() => ListingWhereInputSchema).optional()
}).strict();

export const LandInfoCountOrderByAggregateInputSchema: z.ZodType<Prisma.LandInfoCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  listingId: z.lazy(() => SortOrderSchema).optional(),
  lotNumber: z.lazy(() => SortOrderSchema).optional(),
  landAreaSqm: z.lazy(() => SortOrderSchema).optional(),
  appraisedPricePerSqm: z.lazy(() => SortOrderSchema).optional(),
  landCategory: z.lazy(() => SortOrderSchema).optional(),
  zoningArea: z.lazy(() => SortOrderSchema).optional(),
  usageStatus: z.lazy(() => SortOrderSchema).optional(),
  ownershipType: z.lazy(() => SortOrderSchema).optional(),
  ownershipChangeDate: z.lazy(() => SortOrderSchema).optional(),
  ownershipChangeReason: z.lazy(() => SortOrderSchema).optional(),
  roadContactType: z.lazy(() => SortOrderSchema).optional(),
  topography: z.lazy(() => SortOrderSchema).optional(),
  landShape: z.lazy(() => SortOrderSchema).optional(),
  nationalLandUsePlan: z.lazy(() => SortOrderSchema).optional(),
  nationalLandUsePlanStatus: z.lazy(() => SortOrderSchema).optional(),
  otherLandUsePlan: z.lazy(() => SortOrderSchema).optional(),
  otherLandUsePlanStatus: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LandInfoAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LandInfoAvgOrderByAggregateInput> = z.object({
  landAreaSqm: z.lazy(() => SortOrderSchema).optional(),
  appraisedPricePerSqm: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LandInfoMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LandInfoMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  listingId: z.lazy(() => SortOrderSchema).optional(),
  lotNumber: z.lazy(() => SortOrderSchema).optional(),
  landAreaSqm: z.lazy(() => SortOrderSchema).optional(),
  appraisedPricePerSqm: z.lazy(() => SortOrderSchema).optional(),
  landCategory: z.lazy(() => SortOrderSchema).optional(),
  zoningArea: z.lazy(() => SortOrderSchema).optional(),
  usageStatus: z.lazy(() => SortOrderSchema).optional(),
  ownershipType: z.lazy(() => SortOrderSchema).optional(),
  ownershipChangeDate: z.lazy(() => SortOrderSchema).optional(),
  ownershipChangeReason: z.lazy(() => SortOrderSchema).optional(),
  roadContactType: z.lazy(() => SortOrderSchema).optional(),
  topography: z.lazy(() => SortOrderSchema).optional(),
  landShape: z.lazy(() => SortOrderSchema).optional(),
  nationalLandUsePlan: z.lazy(() => SortOrderSchema).optional(),
  nationalLandUsePlanStatus: z.lazy(() => SortOrderSchema).optional(),
  otherLandUsePlan: z.lazy(() => SortOrderSchema).optional(),
  otherLandUsePlanStatus: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LandInfoMinOrderByAggregateInputSchema: z.ZodType<Prisma.LandInfoMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  listingId: z.lazy(() => SortOrderSchema).optional(),
  lotNumber: z.lazy(() => SortOrderSchema).optional(),
  landAreaSqm: z.lazy(() => SortOrderSchema).optional(),
  appraisedPricePerSqm: z.lazy(() => SortOrderSchema).optional(),
  landCategory: z.lazy(() => SortOrderSchema).optional(),
  zoningArea: z.lazy(() => SortOrderSchema).optional(),
  usageStatus: z.lazy(() => SortOrderSchema).optional(),
  ownershipType: z.lazy(() => SortOrderSchema).optional(),
  ownershipChangeDate: z.lazy(() => SortOrderSchema).optional(),
  ownershipChangeReason: z.lazy(() => SortOrderSchema).optional(),
  roadContactType: z.lazy(() => SortOrderSchema).optional(),
  topography: z.lazy(() => SortOrderSchema).optional(),
  landShape: z.lazy(() => SortOrderSchema).optional(),
  nationalLandUsePlan: z.lazy(() => SortOrderSchema).optional(),
  nationalLandUsePlanStatus: z.lazy(() => SortOrderSchema).optional(),
  otherLandUsePlan: z.lazy(() => SortOrderSchema).optional(),
  otherLandUsePlanStatus: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LandInfoSumOrderByAggregateInputSchema: z.ZodType<Prisma.LandInfoSumOrderByAggregateInput> = z.object({
  landAreaSqm: z.lazy(() => SortOrderSchema).optional(),
  appraisedPricePerSqm: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BigIntWithAggregatesFilterSchema: z.ZodType<Prisma.BigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const CommentCountOrderByAggregateInputSchema: z.ZodType<Prisma.CommentCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  recordType: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  listingId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CommentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CommentMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  recordType: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  listingId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CommentMinOrderByAggregateInputSchema: z.ZodType<Prisma.CommentMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  recordType: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  listingId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCreateNestedManyWithoutAgencyInputSchema: z.ZodType<Prisma.UserCreateNestedManyWithoutAgencyInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAgencyInputSchema),z.lazy(() => UserCreateWithoutAgencyInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutAgencyInputSchema),z.lazy(() => UserUncheckedCreateWithoutAgencyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutAgencyInputSchema),z.lazy(() => UserCreateOrConnectWithoutAgencyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserCreateManyAgencyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ListingCreateNestedManyWithoutAgencyInputSchema: z.ZodType<Prisma.ListingCreateNestedManyWithoutAgencyInput> = z.object({
  create: z.union([ z.lazy(() => ListingCreateWithoutAgencyInputSchema),z.lazy(() => ListingCreateWithoutAgencyInputSchema).array(),z.lazy(() => ListingUncheckedCreateWithoutAgencyInputSchema),z.lazy(() => ListingUncheckedCreateWithoutAgencyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ListingCreateOrConnectWithoutAgencyInputSchema),z.lazy(() => ListingCreateOrConnectWithoutAgencyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ListingCreateManyAgencyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ListingWhereUniqueInputSchema),z.lazy(() => ListingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUncheckedCreateNestedManyWithoutAgencyInputSchema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutAgencyInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAgencyInputSchema),z.lazy(() => UserCreateWithoutAgencyInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutAgencyInputSchema),z.lazy(() => UserUncheckedCreateWithoutAgencyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutAgencyInputSchema),z.lazy(() => UserCreateOrConnectWithoutAgencyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserCreateManyAgencyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ListingUncheckedCreateNestedManyWithoutAgencyInputSchema: z.ZodType<Prisma.ListingUncheckedCreateNestedManyWithoutAgencyInput> = z.object({
  create: z.union([ z.lazy(() => ListingCreateWithoutAgencyInputSchema),z.lazy(() => ListingCreateWithoutAgencyInputSchema).array(),z.lazy(() => ListingUncheckedCreateWithoutAgencyInputSchema),z.lazy(() => ListingUncheckedCreateWithoutAgencyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ListingCreateOrConnectWithoutAgencyInputSchema),z.lazy(() => ListingCreateOrConnectWithoutAgencyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ListingCreateManyAgencyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ListingWhereUniqueInputSchema),z.lazy(() => ListingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const UserUpdateManyWithoutAgencyNestedInputSchema: z.ZodType<Prisma.UserUpdateManyWithoutAgencyNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAgencyInputSchema),z.lazy(() => UserCreateWithoutAgencyInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutAgencyInputSchema),z.lazy(() => UserUncheckedCreateWithoutAgencyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutAgencyInputSchema),z.lazy(() => UserCreateOrConnectWithoutAgencyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserUpsertWithWhereUniqueWithoutAgencyInputSchema),z.lazy(() => UserUpsertWithWhereUniqueWithoutAgencyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserCreateManyAgencyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithWhereUniqueWithoutAgencyInputSchema),z.lazy(() => UserUpdateWithWhereUniqueWithoutAgencyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserUpdateManyWithWhereWithoutAgencyInputSchema),z.lazy(() => UserUpdateManyWithWhereWithoutAgencyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ListingUpdateManyWithoutAgencyNestedInputSchema: z.ZodType<Prisma.ListingUpdateManyWithoutAgencyNestedInput> = z.object({
  create: z.union([ z.lazy(() => ListingCreateWithoutAgencyInputSchema),z.lazy(() => ListingCreateWithoutAgencyInputSchema).array(),z.lazy(() => ListingUncheckedCreateWithoutAgencyInputSchema),z.lazy(() => ListingUncheckedCreateWithoutAgencyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ListingCreateOrConnectWithoutAgencyInputSchema),z.lazy(() => ListingCreateOrConnectWithoutAgencyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ListingUpsertWithWhereUniqueWithoutAgencyInputSchema),z.lazy(() => ListingUpsertWithWhereUniqueWithoutAgencyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ListingCreateManyAgencyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ListingWhereUniqueInputSchema),z.lazy(() => ListingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ListingWhereUniqueInputSchema),z.lazy(() => ListingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ListingWhereUniqueInputSchema),z.lazy(() => ListingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ListingWhereUniqueInputSchema),z.lazy(() => ListingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ListingUpdateWithWhereUniqueWithoutAgencyInputSchema),z.lazy(() => ListingUpdateWithWhereUniqueWithoutAgencyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ListingUpdateManyWithWhereWithoutAgencyInputSchema),z.lazy(() => ListingUpdateManyWithWhereWithoutAgencyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ListingScalarWhereInputSchema),z.lazy(() => ListingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserUncheckedUpdateManyWithoutAgencyNestedInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutAgencyNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAgencyInputSchema),z.lazy(() => UserCreateWithoutAgencyInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutAgencyInputSchema),z.lazy(() => UserUncheckedCreateWithoutAgencyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutAgencyInputSchema),z.lazy(() => UserCreateOrConnectWithoutAgencyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserUpsertWithWhereUniqueWithoutAgencyInputSchema),z.lazy(() => UserUpsertWithWhereUniqueWithoutAgencyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserCreateManyAgencyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithWhereUniqueWithoutAgencyInputSchema),z.lazy(() => UserUpdateWithWhereUniqueWithoutAgencyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserUpdateManyWithWhereWithoutAgencyInputSchema),z.lazy(() => UserUpdateManyWithWhereWithoutAgencyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ListingUncheckedUpdateManyWithoutAgencyNestedInputSchema: z.ZodType<Prisma.ListingUncheckedUpdateManyWithoutAgencyNestedInput> = z.object({
  create: z.union([ z.lazy(() => ListingCreateWithoutAgencyInputSchema),z.lazy(() => ListingCreateWithoutAgencyInputSchema).array(),z.lazy(() => ListingUncheckedCreateWithoutAgencyInputSchema),z.lazy(() => ListingUncheckedCreateWithoutAgencyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ListingCreateOrConnectWithoutAgencyInputSchema),z.lazy(() => ListingCreateOrConnectWithoutAgencyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ListingUpsertWithWhereUniqueWithoutAgencyInputSchema),z.lazy(() => ListingUpsertWithWhereUniqueWithoutAgencyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ListingCreateManyAgencyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ListingWhereUniqueInputSchema),z.lazy(() => ListingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ListingWhereUniqueInputSchema),z.lazy(() => ListingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ListingWhereUniqueInputSchema),z.lazy(() => ListingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ListingWhereUniqueInputSchema),z.lazy(() => ListingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ListingUpdateWithWhereUniqueWithoutAgencyInputSchema),z.lazy(() => ListingUpdateWithWhereUniqueWithoutAgencyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ListingUpdateManyWithWhereWithoutAgencyInputSchema),z.lazy(() => ListingUpdateManyWithWhereWithoutAgencyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ListingScalarWhereInputSchema),z.lazy(() => ListingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AgencyCreateNestedOneWithoutUsersInputSchema: z.ZodType<Prisma.AgencyCreateNestedOneWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => AgencyCreateWithoutUsersInputSchema),z.lazy(() => AgencyUncheckedCreateWithoutUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AgencyCreateOrConnectWithoutUsersInputSchema).optional(),
  connect: z.lazy(() => AgencyWhereUniqueInputSchema).optional()
}).strict();

export const ListingCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ListingCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ListingCreateWithoutUserInputSchema),z.lazy(() => ListingCreateWithoutUserInputSchema).array(),z.lazy(() => ListingUncheckedCreateWithoutUserInputSchema),z.lazy(() => ListingUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ListingCreateOrConnectWithoutUserInputSchema),z.lazy(() => ListingCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ListingCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ListingWhereUniqueInputSchema),z.lazy(() => ListingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CommentCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.CommentCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => CommentCreateWithoutUserInputSchema),z.lazy(() => CommentCreateWithoutUserInputSchema).array(),z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema),z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema),z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommentCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ListingUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ListingUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ListingCreateWithoutUserInputSchema),z.lazy(() => ListingCreateWithoutUserInputSchema).array(),z.lazy(() => ListingUncheckedCreateWithoutUserInputSchema),z.lazy(() => ListingUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ListingCreateOrConnectWithoutUserInputSchema),z.lazy(() => ListingCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ListingCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ListingWhereUniqueInputSchema),z.lazy(() => ListingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CommentUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.CommentUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => CommentCreateWithoutUserInputSchema),z.lazy(() => CommentCreateWithoutUserInputSchema).array(),z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema),z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema),z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommentCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const AgencyUpdateOneRequiredWithoutUsersNestedInputSchema: z.ZodType<Prisma.AgencyUpdateOneRequiredWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => AgencyCreateWithoutUsersInputSchema),z.lazy(() => AgencyUncheckedCreateWithoutUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AgencyCreateOrConnectWithoutUsersInputSchema).optional(),
  upsert: z.lazy(() => AgencyUpsertWithoutUsersInputSchema).optional(),
  connect: z.lazy(() => AgencyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AgencyUpdateToOneWithWhereWithoutUsersInputSchema),z.lazy(() => AgencyUpdateWithoutUsersInputSchema),z.lazy(() => AgencyUncheckedUpdateWithoutUsersInputSchema) ]).optional(),
}).strict();

export const ListingUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ListingUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ListingCreateWithoutUserInputSchema),z.lazy(() => ListingCreateWithoutUserInputSchema).array(),z.lazy(() => ListingUncheckedCreateWithoutUserInputSchema),z.lazy(() => ListingUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ListingCreateOrConnectWithoutUserInputSchema),z.lazy(() => ListingCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ListingUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ListingUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ListingCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ListingWhereUniqueInputSchema),z.lazy(() => ListingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ListingWhereUniqueInputSchema),z.lazy(() => ListingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ListingWhereUniqueInputSchema),z.lazy(() => ListingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ListingWhereUniqueInputSchema),z.lazy(() => ListingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ListingUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ListingUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ListingUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ListingUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ListingScalarWhereInputSchema),z.lazy(() => ListingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CommentUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CommentUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => CommentCreateWithoutUserInputSchema),z.lazy(() => CommentCreateWithoutUserInputSchema).array(),z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema),z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema),z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CommentUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CommentUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommentCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CommentUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CommentUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CommentUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => CommentUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CommentScalarWhereInputSchema),z.lazy(() => CommentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ListingUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ListingUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ListingCreateWithoutUserInputSchema),z.lazy(() => ListingCreateWithoutUserInputSchema).array(),z.lazy(() => ListingUncheckedCreateWithoutUserInputSchema),z.lazy(() => ListingUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ListingCreateOrConnectWithoutUserInputSchema),z.lazy(() => ListingCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ListingUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ListingUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ListingCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ListingWhereUniqueInputSchema),z.lazy(() => ListingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ListingWhereUniqueInputSchema),z.lazy(() => ListingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ListingWhereUniqueInputSchema),z.lazy(() => ListingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ListingWhereUniqueInputSchema),z.lazy(() => ListingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ListingUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ListingUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ListingUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ListingUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ListingScalarWhereInputSchema),z.lazy(() => ListingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CommentUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => CommentCreateWithoutUserInputSchema),z.lazy(() => CommentCreateWithoutUserInputSchema).array(),z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema),z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema),z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CommentUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CommentUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommentCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CommentUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CommentUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CommentUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => CommentUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CommentScalarWhereInputSchema),z.lazy(() => CommentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ListingCreatephotosInputSchema: z.ZodType<Prisma.ListingCreatephotosInput> = z.object({
  set: z.string().array()
}).strict();

export const AgencyCreateNestedOneWithoutListingsInputSchema: z.ZodType<Prisma.AgencyCreateNestedOneWithoutListingsInput> = z.object({
  create: z.union([ z.lazy(() => AgencyCreateWithoutListingsInputSchema),z.lazy(() => AgencyUncheckedCreateWithoutListingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AgencyCreateOrConnectWithoutListingsInputSchema).optional(),
  connect: z.lazy(() => AgencyWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutListingsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutListingsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutListingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutListingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutListingsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const CommentCreateNestedManyWithoutListingInputSchema: z.ZodType<Prisma.CommentCreateNestedManyWithoutListingInput> = z.object({
  create: z.union([ z.lazy(() => CommentCreateWithoutListingInputSchema),z.lazy(() => CommentCreateWithoutListingInputSchema).array(),z.lazy(() => CommentUncheckedCreateWithoutListingInputSchema),z.lazy(() => CommentUncheckedCreateWithoutListingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommentCreateOrConnectWithoutListingInputSchema),z.lazy(() => CommentCreateOrConnectWithoutListingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommentCreateManyListingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const LandInfoCreateNestedOneWithoutListingInputSchema: z.ZodType<Prisma.LandInfoCreateNestedOneWithoutListingInput> = z.object({
  create: z.union([ z.lazy(() => LandInfoCreateWithoutListingInputSchema),z.lazy(() => LandInfoUncheckedCreateWithoutListingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LandInfoCreateOrConnectWithoutListingInputSchema).optional(),
  connect: z.lazy(() => LandInfoWhereUniqueInputSchema).optional()
}).strict();

export const CommentUncheckedCreateNestedManyWithoutListingInputSchema: z.ZodType<Prisma.CommentUncheckedCreateNestedManyWithoutListingInput> = z.object({
  create: z.union([ z.lazy(() => CommentCreateWithoutListingInputSchema),z.lazy(() => CommentCreateWithoutListingInputSchema).array(),z.lazy(() => CommentUncheckedCreateWithoutListingInputSchema),z.lazy(() => CommentUncheckedCreateWithoutListingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommentCreateOrConnectWithoutListingInputSchema),z.lazy(() => CommentCreateOrConnectWithoutListingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommentCreateManyListingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const LandInfoUncheckedCreateNestedOneWithoutListingInputSchema: z.ZodType<Prisma.LandInfoUncheckedCreateNestedOneWithoutListingInput> = z.object({
  create: z.union([ z.lazy(() => LandInfoCreateWithoutListingInputSchema),z.lazy(() => LandInfoUncheckedCreateWithoutListingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LandInfoCreateOrConnectWithoutListingInputSchema).optional(),
  connect: z.lazy(() => LandInfoWhereUniqueInputSchema).optional()
}).strict();

export const EnumListingTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumListingTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ListingTypeSchema).optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const ListingUpdatephotosInputSchema: z.ZodType<Prisma.ListingUpdatephotosInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const NullableFloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableFloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NullableBigIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBigIntFieldUpdateOperationsInput> = z.object({
  set: z.bigint().optional().nullable(),
  increment: z.bigint().optional(),
  decrement: z.bigint().optional(),
  multiply: z.bigint().optional(),
  divide: z.bigint().optional()
}).strict();

export const NullableBoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional().nullable()
}).strict();

export const AgencyUpdateOneRequiredWithoutListingsNestedInputSchema: z.ZodType<Prisma.AgencyUpdateOneRequiredWithoutListingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => AgencyCreateWithoutListingsInputSchema),z.lazy(() => AgencyUncheckedCreateWithoutListingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AgencyCreateOrConnectWithoutListingsInputSchema).optional(),
  upsert: z.lazy(() => AgencyUpsertWithoutListingsInputSchema).optional(),
  connect: z.lazy(() => AgencyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AgencyUpdateToOneWithWhereWithoutListingsInputSchema),z.lazy(() => AgencyUpdateWithoutListingsInputSchema),z.lazy(() => AgencyUncheckedUpdateWithoutListingsInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutListingsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutListingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutListingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutListingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutListingsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutListingsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutListingsInputSchema),z.lazy(() => UserUpdateWithoutListingsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutListingsInputSchema) ]).optional(),
}).strict();

export const CommentUpdateManyWithoutListingNestedInputSchema: z.ZodType<Prisma.CommentUpdateManyWithoutListingNestedInput> = z.object({
  create: z.union([ z.lazy(() => CommentCreateWithoutListingInputSchema),z.lazy(() => CommentCreateWithoutListingInputSchema).array(),z.lazy(() => CommentUncheckedCreateWithoutListingInputSchema),z.lazy(() => CommentUncheckedCreateWithoutListingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommentCreateOrConnectWithoutListingInputSchema),z.lazy(() => CommentCreateOrConnectWithoutListingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CommentUpsertWithWhereUniqueWithoutListingInputSchema),z.lazy(() => CommentUpsertWithWhereUniqueWithoutListingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommentCreateManyListingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CommentUpdateWithWhereUniqueWithoutListingInputSchema),z.lazy(() => CommentUpdateWithWhereUniqueWithoutListingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CommentUpdateManyWithWhereWithoutListingInputSchema),z.lazy(() => CommentUpdateManyWithWhereWithoutListingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CommentScalarWhereInputSchema),z.lazy(() => CommentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const LandInfoUpdateOneWithoutListingNestedInputSchema: z.ZodType<Prisma.LandInfoUpdateOneWithoutListingNestedInput> = z.object({
  create: z.union([ z.lazy(() => LandInfoCreateWithoutListingInputSchema),z.lazy(() => LandInfoUncheckedCreateWithoutListingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LandInfoCreateOrConnectWithoutListingInputSchema).optional(),
  upsert: z.lazy(() => LandInfoUpsertWithoutListingInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LandInfoWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LandInfoWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LandInfoWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LandInfoUpdateToOneWithWhereWithoutListingInputSchema),z.lazy(() => LandInfoUpdateWithoutListingInputSchema),z.lazy(() => LandInfoUncheckedUpdateWithoutListingInputSchema) ]).optional(),
}).strict();

export const CommentUncheckedUpdateManyWithoutListingNestedInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateManyWithoutListingNestedInput> = z.object({
  create: z.union([ z.lazy(() => CommentCreateWithoutListingInputSchema),z.lazy(() => CommentCreateWithoutListingInputSchema).array(),z.lazy(() => CommentUncheckedCreateWithoutListingInputSchema),z.lazy(() => CommentUncheckedCreateWithoutListingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommentCreateOrConnectWithoutListingInputSchema),z.lazy(() => CommentCreateOrConnectWithoutListingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CommentUpsertWithWhereUniqueWithoutListingInputSchema),z.lazy(() => CommentUpsertWithWhereUniqueWithoutListingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommentCreateManyListingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CommentWhereUniqueInputSchema),z.lazy(() => CommentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CommentUpdateWithWhereUniqueWithoutListingInputSchema),z.lazy(() => CommentUpdateWithWhereUniqueWithoutListingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CommentUpdateManyWithWhereWithoutListingInputSchema),z.lazy(() => CommentUpdateManyWithWhereWithoutListingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CommentScalarWhereInputSchema),z.lazy(() => CommentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const LandInfoUncheckedUpdateOneWithoutListingNestedInputSchema: z.ZodType<Prisma.LandInfoUncheckedUpdateOneWithoutListingNestedInput> = z.object({
  create: z.union([ z.lazy(() => LandInfoCreateWithoutListingInputSchema),z.lazy(() => LandInfoUncheckedCreateWithoutListingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LandInfoCreateOrConnectWithoutListingInputSchema).optional(),
  upsert: z.lazy(() => LandInfoUpsertWithoutListingInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LandInfoWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LandInfoWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LandInfoWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LandInfoUpdateToOneWithWhereWithoutListingInputSchema),z.lazy(() => LandInfoUpdateWithoutListingInputSchema),z.lazy(() => LandInfoUncheckedUpdateWithoutListingInputSchema) ]).optional(),
}).strict();

export const ListingCreateNestedOneWithoutLandInfoInputSchema: z.ZodType<Prisma.ListingCreateNestedOneWithoutLandInfoInput> = z.object({
  create: z.union([ z.lazy(() => ListingCreateWithoutLandInfoInputSchema),z.lazy(() => ListingUncheckedCreateWithoutLandInfoInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ListingCreateOrConnectWithoutLandInfoInputSchema).optional(),
  connect: z.lazy(() => ListingWhereUniqueInputSchema).optional()
}).strict();

export const BigIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BigIntFieldUpdateOperationsInput> = z.object({
  set: z.bigint().optional(),
  increment: z.bigint().optional(),
  decrement: z.bigint().optional(),
  multiply: z.bigint().optional(),
  divide: z.bigint().optional()
}).strict();

export const ListingUpdateOneRequiredWithoutLandInfoNestedInputSchema: z.ZodType<Prisma.ListingUpdateOneRequiredWithoutLandInfoNestedInput> = z.object({
  create: z.union([ z.lazy(() => ListingCreateWithoutLandInfoInputSchema),z.lazy(() => ListingUncheckedCreateWithoutLandInfoInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ListingCreateOrConnectWithoutLandInfoInputSchema).optional(),
  upsert: z.lazy(() => ListingUpsertWithoutLandInfoInputSchema).optional(),
  connect: z.lazy(() => ListingWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ListingUpdateToOneWithWhereWithoutLandInfoInputSchema),z.lazy(() => ListingUpdateWithoutLandInfoInputSchema),z.lazy(() => ListingUncheckedUpdateWithoutLandInfoInputSchema) ]).optional(),
}).strict();

export const ListingCreateNestedOneWithoutCommentsInputSchema: z.ZodType<Prisma.ListingCreateNestedOneWithoutCommentsInput> = z.object({
  create: z.union([ z.lazy(() => ListingCreateWithoutCommentsInputSchema),z.lazy(() => ListingUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ListingCreateOrConnectWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => ListingWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutCommentsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCommentsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCommentsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const ListingUpdateOneRequiredWithoutCommentsNestedInputSchema: z.ZodType<Prisma.ListingUpdateOneRequiredWithoutCommentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ListingCreateWithoutCommentsInputSchema),z.lazy(() => ListingUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ListingCreateOrConnectWithoutCommentsInputSchema).optional(),
  upsert: z.lazy(() => ListingUpsertWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => ListingWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ListingUpdateToOneWithWhereWithoutCommentsInputSchema),z.lazy(() => ListingUpdateWithoutCommentsInputSchema),z.lazy(() => ListingUncheckedUpdateWithoutCommentsInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutCommentsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCommentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCommentsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCommentsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCommentsInputSchema),z.lazy(() => UserUpdateWithoutCommentsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCommentsInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumListingTypeFilterSchema: z.ZodType<Prisma.NestedEnumListingTypeFilter> = z.object({
  equals: z.lazy(() => ListingTypeSchema).optional(),
  in: z.lazy(() => ListingTypeSchema).array().optional(),
  notIn: z.lazy(() => ListingTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ListingTypeSchema),z.lazy(() => NestedEnumListingTypeFilterSchema) ]).optional(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBigIntNullableFilterSchema: z.ZodType<Prisma.NestedBigIntNullableFilter> = z.object({
  equals: z.bigint().optional().nullable(),
  in: z.bigint().array().optional().nullable(),
  notIn: z.bigint().array().optional().nullable(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolNullableFilterSchema: z.ZodType<Prisma.NestedBoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumListingTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumListingTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ListingTypeSchema).optional(),
  in: z.lazy(() => ListingTypeSchema).array().optional(),
  notIn: z.lazy(() => ListingTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ListingTypeSchema),z.lazy(() => NestedEnumListingTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumListingTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumListingTypeFilterSchema).optional()
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional()
}).strict();

export const NestedBigIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBigIntNullableWithAggregatesFilter> = z.object({
  equals: z.bigint().optional().nullable(),
  in: z.bigint().array().optional().nullable(),
  notIn: z.bigint().array().optional().nullable(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntNullableFilterSchema).optional()
}).strict();

export const NestedBoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();

export const NestedBigIntFilterSchema: z.ZodType<Prisma.NestedBigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const NestedBigIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const UserCreateWithoutAgencyInputSchema: z.ZodType<Prisma.UserCreateWithoutAgencyInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  phone: z.string().optional().nullable(),
  tel: z.string().optional().nullable(),
  profileImage: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listings: z.lazy(() => ListingCreateNestedManyWithoutUserInputSchema).optional(),
  comments: z.lazy(() => CommentCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAgencyInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAgencyInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  phone: z.string().optional().nullable(),
  tel: z.string().optional().nullable(),
  profileImage: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listings: z.lazy(() => ListingUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAgencyInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAgencyInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAgencyInputSchema),z.lazy(() => UserUncheckedCreateWithoutAgencyInputSchema) ]),
}).strict();

export const UserCreateManyAgencyInputEnvelopeSchema: z.ZodType<Prisma.UserCreateManyAgencyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserCreateManyAgencyInputSchema),z.lazy(() => UserCreateManyAgencyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ListingCreateWithoutAgencyInputSchema: z.ZodType<Prisma.ListingCreateWithoutAgencyInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listingType: z.lazy(() => ListingTypeSchema),
  location: z.string(),
  roadAddress: z.string(),
  buildingName: z.string(),
  internalManagementId: z.string(),
  currentStatus: z.string(),
  mainCategory: z.string(),
  subCategory: z.string(),
  label: z.string(),
  isHidden: z.boolean().optional(),
  photos: z.union([ z.lazy(() => ListingCreatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.number().int(),
  currentFloors: z.string(),
  landArea: z.number(),
  totalFloorArea: z.number(),
  buildingArea: z.number(),
  grossFloorAreaForFAR: z.number(),
  primaryUsage: z.string(),
  primaryStructure: z.string(),
  elevator: z.string(),
  parking: z.string(),
  roadWidth: z.string(),
  additionalUsage: z.string().optional().nullable(),
  buildingHeight: z.string(),
  roofStructure: z.string(),
  numberOfHouseholds: z.number().int(),
  approvalDate: z.coerce.date().optional().nullable(),
  constructionStartDate: z.coerce.date().optional().nullable(),
  occupancyApprovalDate: z.coerce.date().optional().nullable(),
  renovationDate: z.coerce.date().optional().nullable(),
  rentalUsage: z.string().optional().nullable(),
  rentalArea: z.number().optional().nullable(),
  exclusiveArea: z.number().optional().nullable(),
  heating: z.string().optional().nullable(),
  deposit: z.bigint().optional().nullable(),
  monthlyRent: z.bigint().optional().nullable(),
  fixedMonthlyCost: z.bigint().optional().nullable(),
  maintenanceFeeRental: z.bigint().optional().nullable(),
  tax: z.boolean().optional().nullable(),
  purchasePrice: z.bigint().optional().nullable(),
  depositPrice: z.bigint().optional().nullable(),
  yield: z.number().optional().nullable(),
  averagePrice: z.bigint().optional().nullable(),
  securityDeposit: z.bigint().optional().nullable(),
  monthlyRentSale: z.bigint().optional().nullable(),
  maintenanceFeeSale: z.bigint().optional().nullable(),
  loanStatus: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutListingsInputSchema),
  comments: z.lazy(() => CommentCreateNestedManyWithoutListingInputSchema).optional(),
  landInfo: z.lazy(() => LandInfoCreateNestedOneWithoutListingInputSchema).optional()
}).strict();

export const ListingUncheckedCreateWithoutAgencyInputSchema: z.ZodType<Prisma.ListingUncheckedCreateWithoutAgencyInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listingType: z.lazy(() => ListingTypeSchema),
  location: z.string(),
  roadAddress: z.string(),
  buildingName: z.string(),
  internalManagementId: z.string(),
  currentStatus: z.string(),
  mainCategory: z.string(),
  subCategory: z.string(),
  label: z.string(),
  isHidden: z.boolean().optional(),
  photos: z.union([ z.lazy(() => ListingCreatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.number().int(),
  currentFloors: z.string(),
  landArea: z.number(),
  totalFloorArea: z.number(),
  buildingArea: z.number(),
  grossFloorAreaForFAR: z.number(),
  primaryUsage: z.string(),
  primaryStructure: z.string(),
  elevator: z.string(),
  parking: z.string(),
  roadWidth: z.string(),
  additionalUsage: z.string().optional().nullable(),
  buildingHeight: z.string(),
  roofStructure: z.string(),
  numberOfHouseholds: z.number().int(),
  approvalDate: z.coerce.date().optional().nullable(),
  constructionStartDate: z.coerce.date().optional().nullable(),
  occupancyApprovalDate: z.coerce.date().optional().nullable(),
  renovationDate: z.coerce.date().optional().nullable(),
  rentalUsage: z.string().optional().nullable(),
  rentalArea: z.number().optional().nullable(),
  exclusiveArea: z.number().optional().nullable(),
  heating: z.string().optional().nullable(),
  deposit: z.bigint().optional().nullable(),
  monthlyRent: z.bigint().optional().nullable(),
  fixedMonthlyCost: z.bigint().optional().nullable(),
  maintenanceFeeRental: z.bigint().optional().nullable(),
  tax: z.boolean().optional().nullable(),
  purchasePrice: z.bigint().optional().nullable(),
  depositPrice: z.bigint().optional().nullable(),
  yield: z.number().optional().nullable(),
  averagePrice: z.bigint().optional().nullable(),
  securityDeposit: z.bigint().optional().nullable(),
  monthlyRentSale: z.bigint().optional().nullable(),
  maintenanceFeeSale: z.bigint().optional().nullable(),
  loanStatus: z.string().optional().nullable(),
  userId: z.string(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutListingInputSchema).optional(),
  landInfo: z.lazy(() => LandInfoUncheckedCreateNestedOneWithoutListingInputSchema).optional()
}).strict();

export const ListingCreateOrConnectWithoutAgencyInputSchema: z.ZodType<Prisma.ListingCreateOrConnectWithoutAgencyInput> = z.object({
  where: z.lazy(() => ListingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ListingCreateWithoutAgencyInputSchema),z.lazy(() => ListingUncheckedCreateWithoutAgencyInputSchema) ]),
}).strict();

export const ListingCreateManyAgencyInputEnvelopeSchema: z.ZodType<Prisma.ListingCreateManyAgencyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ListingCreateManyAgencyInputSchema),z.lazy(() => ListingCreateManyAgencyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserUpsertWithWhereUniqueWithoutAgencyInputSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutAgencyInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserUpdateWithoutAgencyInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAgencyInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAgencyInputSchema),z.lazy(() => UserUncheckedCreateWithoutAgencyInputSchema) ]),
}).strict();

export const UserUpdateWithWhereUniqueWithoutAgencyInputSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutAgencyInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserUpdateWithoutAgencyInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAgencyInputSchema) ]),
}).strict();

export const UserUpdateManyWithWhereWithoutAgencyInputSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutAgencyInput> = z.object({
  where: z.lazy(() => UserScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserUpdateManyMutationInputSchema),z.lazy(() => UserUncheckedUpdateManyWithoutAgencyInputSchema) ]),
}).strict();

export const UserScalarWhereInputSchema: z.ZodType<Prisma.UserScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  profileImage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  agencyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ListingUpsertWithWhereUniqueWithoutAgencyInputSchema: z.ZodType<Prisma.ListingUpsertWithWhereUniqueWithoutAgencyInput> = z.object({
  where: z.lazy(() => ListingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ListingUpdateWithoutAgencyInputSchema),z.lazy(() => ListingUncheckedUpdateWithoutAgencyInputSchema) ]),
  create: z.union([ z.lazy(() => ListingCreateWithoutAgencyInputSchema),z.lazy(() => ListingUncheckedCreateWithoutAgencyInputSchema) ]),
}).strict();

export const ListingUpdateWithWhereUniqueWithoutAgencyInputSchema: z.ZodType<Prisma.ListingUpdateWithWhereUniqueWithoutAgencyInput> = z.object({
  where: z.lazy(() => ListingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ListingUpdateWithoutAgencyInputSchema),z.lazy(() => ListingUncheckedUpdateWithoutAgencyInputSchema) ]),
}).strict();

export const ListingUpdateManyWithWhereWithoutAgencyInputSchema: z.ZodType<Prisma.ListingUpdateManyWithWhereWithoutAgencyInput> = z.object({
  where: z.lazy(() => ListingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ListingUpdateManyMutationInputSchema),z.lazy(() => ListingUncheckedUpdateManyWithoutAgencyInputSchema) ]),
}).strict();

export const ListingScalarWhereInputSchema: z.ZodType<Prisma.ListingScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ListingScalarWhereInputSchema),z.lazy(() => ListingScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ListingScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ListingScalarWhereInputSchema),z.lazy(() => ListingScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  listingType: z.union([ z.lazy(() => EnumListingTypeFilterSchema),z.lazy(() => ListingTypeSchema) ]).optional(),
  location: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roadAddress: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  buildingName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  internalManagementId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  currentStatus: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mainCategory: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  subCategory: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isHidden: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  photos: z.lazy(() => StringNullableListFilterSchema).optional(),
  totalFloors: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  currentFloors: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  landArea: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  totalFloorArea: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  buildingArea: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  grossFloorAreaForFAR: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  primaryUsage: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  primaryStructure: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  elevator: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  parking: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roadWidth: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  additionalUsage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  buildingHeight: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roofStructure: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  numberOfHouseholds: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  approvalDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  constructionStartDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  occupancyApprovalDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  renovationDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  rentalUsage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  rentalArea: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  exclusiveArea: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  heating: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deposit: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  monthlyRent: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  fixedMonthlyCost: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  maintenanceFeeRental: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  tax: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  purchasePrice: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  depositPrice: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  yield: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  averagePrice: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  securityDeposit: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  monthlyRentSale: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  maintenanceFeeSale: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  loanStatus: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  agencyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const AgencyCreateWithoutUsersInputSchema: z.ZodType<Prisma.AgencyCreateWithoutUsersInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listings: z.lazy(() => ListingCreateNestedManyWithoutAgencyInputSchema).optional()
}).strict();

export const AgencyUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.AgencyUncheckedCreateWithoutUsersInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listings: z.lazy(() => ListingUncheckedCreateNestedManyWithoutAgencyInputSchema).optional()
}).strict();

export const AgencyCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.AgencyCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => AgencyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AgencyCreateWithoutUsersInputSchema),z.lazy(() => AgencyUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const ListingCreateWithoutUserInputSchema: z.ZodType<Prisma.ListingCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listingType: z.lazy(() => ListingTypeSchema),
  location: z.string(),
  roadAddress: z.string(),
  buildingName: z.string(),
  internalManagementId: z.string(),
  currentStatus: z.string(),
  mainCategory: z.string(),
  subCategory: z.string(),
  label: z.string(),
  isHidden: z.boolean().optional(),
  photos: z.union([ z.lazy(() => ListingCreatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.number().int(),
  currentFloors: z.string(),
  landArea: z.number(),
  totalFloorArea: z.number(),
  buildingArea: z.number(),
  grossFloorAreaForFAR: z.number(),
  primaryUsage: z.string(),
  primaryStructure: z.string(),
  elevator: z.string(),
  parking: z.string(),
  roadWidth: z.string(),
  additionalUsage: z.string().optional().nullable(),
  buildingHeight: z.string(),
  roofStructure: z.string(),
  numberOfHouseholds: z.number().int(),
  approvalDate: z.coerce.date().optional().nullable(),
  constructionStartDate: z.coerce.date().optional().nullable(),
  occupancyApprovalDate: z.coerce.date().optional().nullable(),
  renovationDate: z.coerce.date().optional().nullable(),
  rentalUsage: z.string().optional().nullable(),
  rentalArea: z.number().optional().nullable(),
  exclusiveArea: z.number().optional().nullable(),
  heating: z.string().optional().nullable(),
  deposit: z.bigint().optional().nullable(),
  monthlyRent: z.bigint().optional().nullable(),
  fixedMonthlyCost: z.bigint().optional().nullable(),
  maintenanceFeeRental: z.bigint().optional().nullable(),
  tax: z.boolean().optional().nullable(),
  purchasePrice: z.bigint().optional().nullable(),
  depositPrice: z.bigint().optional().nullable(),
  yield: z.number().optional().nullable(),
  averagePrice: z.bigint().optional().nullable(),
  securityDeposit: z.bigint().optional().nullable(),
  monthlyRentSale: z.bigint().optional().nullable(),
  maintenanceFeeSale: z.bigint().optional().nullable(),
  loanStatus: z.string().optional().nullable(),
  agency: z.lazy(() => AgencyCreateNestedOneWithoutListingsInputSchema),
  comments: z.lazy(() => CommentCreateNestedManyWithoutListingInputSchema).optional(),
  landInfo: z.lazy(() => LandInfoCreateNestedOneWithoutListingInputSchema).optional()
}).strict();

export const ListingUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ListingUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listingType: z.lazy(() => ListingTypeSchema),
  location: z.string(),
  roadAddress: z.string(),
  buildingName: z.string(),
  internalManagementId: z.string(),
  currentStatus: z.string(),
  mainCategory: z.string(),
  subCategory: z.string(),
  label: z.string(),
  isHidden: z.boolean().optional(),
  photos: z.union([ z.lazy(() => ListingCreatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.number().int(),
  currentFloors: z.string(),
  landArea: z.number(),
  totalFloorArea: z.number(),
  buildingArea: z.number(),
  grossFloorAreaForFAR: z.number(),
  primaryUsage: z.string(),
  primaryStructure: z.string(),
  elevator: z.string(),
  parking: z.string(),
  roadWidth: z.string(),
  additionalUsage: z.string().optional().nullable(),
  buildingHeight: z.string(),
  roofStructure: z.string(),
  numberOfHouseholds: z.number().int(),
  approvalDate: z.coerce.date().optional().nullable(),
  constructionStartDate: z.coerce.date().optional().nullable(),
  occupancyApprovalDate: z.coerce.date().optional().nullable(),
  renovationDate: z.coerce.date().optional().nullable(),
  rentalUsage: z.string().optional().nullable(),
  rentalArea: z.number().optional().nullable(),
  exclusiveArea: z.number().optional().nullable(),
  heating: z.string().optional().nullable(),
  deposit: z.bigint().optional().nullable(),
  monthlyRent: z.bigint().optional().nullable(),
  fixedMonthlyCost: z.bigint().optional().nullable(),
  maintenanceFeeRental: z.bigint().optional().nullable(),
  tax: z.boolean().optional().nullable(),
  purchasePrice: z.bigint().optional().nullable(),
  depositPrice: z.bigint().optional().nullable(),
  yield: z.number().optional().nullable(),
  averagePrice: z.bigint().optional().nullable(),
  securityDeposit: z.bigint().optional().nullable(),
  monthlyRentSale: z.bigint().optional().nullable(),
  maintenanceFeeSale: z.bigint().optional().nullable(),
  loanStatus: z.string().optional().nullable(),
  agencyId: z.string(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutListingInputSchema).optional(),
  landInfo: z.lazy(() => LandInfoUncheckedCreateNestedOneWithoutListingInputSchema).optional()
}).strict();

export const ListingCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ListingCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ListingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ListingCreateWithoutUserInputSchema),z.lazy(() => ListingUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ListingCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ListingCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ListingCreateManyUserInputSchema),z.lazy(() => ListingCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CommentCreateWithoutUserInputSchema: z.ZodType<Prisma.CommentCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  recordType: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listing: z.lazy(() => ListingCreateNestedOneWithoutCommentsInputSchema)
}).strict();

export const CommentUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.CommentUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  recordType: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listingId: z.string()
}).strict();

export const CommentCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.CommentCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => CommentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CommentCreateWithoutUserInputSchema),z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const CommentCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.CommentCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CommentCreateManyUserInputSchema),z.lazy(() => CommentCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AgencyUpsertWithoutUsersInputSchema: z.ZodType<Prisma.AgencyUpsertWithoutUsersInput> = z.object({
  update: z.union([ z.lazy(() => AgencyUpdateWithoutUsersInputSchema),z.lazy(() => AgencyUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => AgencyCreateWithoutUsersInputSchema),z.lazy(() => AgencyUncheckedCreateWithoutUsersInputSchema) ]),
  where: z.lazy(() => AgencyWhereInputSchema).optional()
}).strict();

export const AgencyUpdateToOneWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.AgencyUpdateToOneWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => AgencyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AgencyUpdateWithoutUsersInputSchema),z.lazy(() => AgencyUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export const AgencyUpdateWithoutUsersInputSchema: z.ZodType<Prisma.AgencyUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listings: z.lazy(() => ListingUpdateManyWithoutAgencyNestedInputSchema).optional()
}).strict();

export const AgencyUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.AgencyUncheckedUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listings: z.lazy(() => ListingUncheckedUpdateManyWithoutAgencyNestedInputSchema).optional()
}).strict();

export const ListingUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ListingUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ListingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ListingUpdateWithoutUserInputSchema),z.lazy(() => ListingUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ListingCreateWithoutUserInputSchema),z.lazy(() => ListingUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ListingUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ListingUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ListingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ListingUpdateWithoutUserInputSchema),z.lazy(() => ListingUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const ListingUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ListingUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ListingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ListingUpdateManyMutationInputSchema),z.lazy(() => ListingUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const CommentUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => CommentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CommentUpdateWithoutUserInputSchema),z.lazy(() => CommentUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => CommentCreateWithoutUserInputSchema),z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const CommentUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => CommentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CommentUpdateWithoutUserInputSchema),z.lazy(() => CommentUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const CommentUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.CommentUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => CommentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CommentUpdateManyMutationInputSchema),z.lazy(() => CommentUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const CommentScalarWhereInputSchema: z.ZodType<Prisma.CommentScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CommentScalarWhereInputSchema),z.lazy(() => CommentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CommentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CommentScalarWhereInputSchema),z.lazy(() => CommentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  recordType: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  listingId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const AgencyCreateWithoutListingsInputSchema: z.ZodType<Prisma.AgencyCreateWithoutListingsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutAgencyInputSchema).optional()
}).strict();

export const AgencyUncheckedCreateWithoutListingsInputSchema: z.ZodType<Prisma.AgencyUncheckedCreateWithoutListingsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutAgencyInputSchema).optional()
}).strict();

export const AgencyCreateOrConnectWithoutListingsInputSchema: z.ZodType<Prisma.AgencyCreateOrConnectWithoutListingsInput> = z.object({
  where: z.lazy(() => AgencyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AgencyCreateWithoutListingsInputSchema),z.lazy(() => AgencyUncheckedCreateWithoutListingsInputSchema) ]),
}).strict();

export const UserCreateWithoutListingsInputSchema: z.ZodType<Prisma.UserCreateWithoutListingsInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  phone: z.string().optional().nullable(),
  tel: z.string().optional().nullable(),
  profileImage: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  agency: z.lazy(() => AgencyCreateNestedOneWithoutUsersInputSchema),
  comments: z.lazy(() => CommentCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutListingsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutListingsInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  phone: z.string().optional().nullable(),
  tel: z.string().optional().nullable(),
  profileImage: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  agencyId: z.string(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutListingsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutListingsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutListingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutListingsInputSchema) ]),
}).strict();

export const CommentCreateWithoutListingInputSchema: z.ZodType<Prisma.CommentCreateWithoutListingInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  recordType: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCommentsInputSchema)
}).strict();

export const CommentUncheckedCreateWithoutListingInputSchema: z.ZodType<Prisma.CommentUncheckedCreateWithoutListingInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  recordType: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();

export const CommentCreateOrConnectWithoutListingInputSchema: z.ZodType<Prisma.CommentCreateOrConnectWithoutListingInput> = z.object({
  where: z.lazy(() => CommentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CommentCreateWithoutListingInputSchema),z.lazy(() => CommentUncheckedCreateWithoutListingInputSchema) ]),
}).strict();

export const CommentCreateManyListingInputEnvelopeSchema: z.ZodType<Prisma.CommentCreateManyListingInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CommentCreateManyListingInputSchema),z.lazy(() => CommentCreateManyListingInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const LandInfoCreateWithoutListingInputSchema: z.ZodType<Prisma.LandInfoCreateWithoutListingInput> = z.object({
  id: z.string().cuid().optional(),
  lotNumber: z.string(),
  landAreaSqm: z.number(),
  appraisedPricePerSqm: z.bigint(),
  landCategory: z.string(),
  zoningArea: z.string(),
  usageStatus: z.string(),
  ownershipType: z.string(),
  ownershipChangeDate: z.coerce.date().optional().nullable(),
  ownershipChangeReason: z.string().optional().nullable(),
  roadContactType: z.string(),
  topography: z.string(),
  landShape: z.string(),
  nationalLandUsePlan: z.string(),
  nationalLandUsePlanStatus: z.string(),
  otherLandUsePlan: z.string().optional().nullable(),
  otherLandUsePlanStatus: z.string().optional().nullable()
}).strict();

export const LandInfoUncheckedCreateWithoutListingInputSchema: z.ZodType<Prisma.LandInfoUncheckedCreateWithoutListingInput> = z.object({
  id: z.string().cuid().optional(),
  lotNumber: z.string(),
  landAreaSqm: z.number(),
  appraisedPricePerSqm: z.bigint(),
  landCategory: z.string(),
  zoningArea: z.string(),
  usageStatus: z.string(),
  ownershipType: z.string(),
  ownershipChangeDate: z.coerce.date().optional().nullable(),
  ownershipChangeReason: z.string().optional().nullable(),
  roadContactType: z.string(),
  topography: z.string(),
  landShape: z.string(),
  nationalLandUsePlan: z.string(),
  nationalLandUsePlanStatus: z.string(),
  otherLandUsePlan: z.string().optional().nullable(),
  otherLandUsePlanStatus: z.string().optional().nullable()
}).strict();

export const LandInfoCreateOrConnectWithoutListingInputSchema: z.ZodType<Prisma.LandInfoCreateOrConnectWithoutListingInput> = z.object({
  where: z.lazy(() => LandInfoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LandInfoCreateWithoutListingInputSchema),z.lazy(() => LandInfoUncheckedCreateWithoutListingInputSchema) ]),
}).strict();

export const AgencyUpsertWithoutListingsInputSchema: z.ZodType<Prisma.AgencyUpsertWithoutListingsInput> = z.object({
  update: z.union([ z.lazy(() => AgencyUpdateWithoutListingsInputSchema),z.lazy(() => AgencyUncheckedUpdateWithoutListingsInputSchema) ]),
  create: z.union([ z.lazy(() => AgencyCreateWithoutListingsInputSchema),z.lazy(() => AgencyUncheckedCreateWithoutListingsInputSchema) ]),
  where: z.lazy(() => AgencyWhereInputSchema).optional()
}).strict();

export const AgencyUpdateToOneWithWhereWithoutListingsInputSchema: z.ZodType<Prisma.AgencyUpdateToOneWithWhereWithoutListingsInput> = z.object({
  where: z.lazy(() => AgencyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AgencyUpdateWithoutListingsInputSchema),z.lazy(() => AgencyUncheckedUpdateWithoutListingsInputSchema) ]),
}).strict();

export const AgencyUpdateWithoutListingsInputSchema: z.ZodType<Prisma.AgencyUpdateWithoutListingsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUpdateManyWithoutAgencyNestedInputSchema).optional()
}).strict();

export const AgencyUncheckedUpdateWithoutListingsInputSchema: z.ZodType<Prisma.AgencyUncheckedUpdateWithoutListingsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUncheckedUpdateManyWithoutAgencyNestedInputSchema).optional()
}).strict();

export const UserUpsertWithoutListingsInputSchema: z.ZodType<Prisma.UserUpsertWithoutListingsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutListingsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutListingsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutListingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutListingsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutListingsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutListingsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutListingsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutListingsInputSchema) ]),
}).strict();

export const UserUpdateWithoutListingsInputSchema: z.ZodType<Prisma.UserUpdateWithoutListingsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tel: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  agency: z.lazy(() => AgencyUpdateOneRequiredWithoutUsersNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutListingsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutListingsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tel: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  agencyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const CommentUpsertWithWhereUniqueWithoutListingInputSchema: z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutListingInput> = z.object({
  where: z.lazy(() => CommentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CommentUpdateWithoutListingInputSchema),z.lazy(() => CommentUncheckedUpdateWithoutListingInputSchema) ]),
  create: z.union([ z.lazy(() => CommentCreateWithoutListingInputSchema),z.lazy(() => CommentUncheckedCreateWithoutListingInputSchema) ]),
}).strict();

export const CommentUpdateWithWhereUniqueWithoutListingInputSchema: z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutListingInput> = z.object({
  where: z.lazy(() => CommentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CommentUpdateWithoutListingInputSchema),z.lazy(() => CommentUncheckedUpdateWithoutListingInputSchema) ]),
}).strict();

export const CommentUpdateManyWithWhereWithoutListingInputSchema: z.ZodType<Prisma.CommentUpdateManyWithWhereWithoutListingInput> = z.object({
  where: z.lazy(() => CommentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CommentUpdateManyMutationInputSchema),z.lazy(() => CommentUncheckedUpdateManyWithoutListingInputSchema) ]),
}).strict();

export const LandInfoUpsertWithoutListingInputSchema: z.ZodType<Prisma.LandInfoUpsertWithoutListingInput> = z.object({
  update: z.union([ z.lazy(() => LandInfoUpdateWithoutListingInputSchema),z.lazy(() => LandInfoUncheckedUpdateWithoutListingInputSchema) ]),
  create: z.union([ z.lazy(() => LandInfoCreateWithoutListingInputSchema),z.lazy(() => LandInfoUncheckedCreateWithoutListingInputSchema) ]),
  where: z.lazy(() => LandInfoWhereInputSchema).optional()
}).strict();

export const LandInfoUpdateToOneWithWhereWithoutListingInputSchema: z.ZodType<Prisma.LandInfoUpdateToOneWithWhereWithoutListingInput> = z.object({
  where: z.lazy(() => LandInfoWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LandInfoUpdateWithoutListingInputSchema),z.lazy(() => LandInfoUncheckedUpdateWithoutListingInputSchema) ]),
}).strict();

export const LandInfoUpdateWithoutListingInputSchema: z.ZodType<Prisma.LandInfoUpdateWithoutListingInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lotNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landAreaSqm: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  appraisedPricePerSqm: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  landCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  zoningArea: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  usageStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownershipType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownershipChangeDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownershipChangeReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roadContactType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  topography: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landShape: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nationalLandUsePlan: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nationalLandUsePlanStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  otherLandUsePlan: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  otherLandUsePlanStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const LandInfoUncheckedUpdateWithoutListingInputSchema: z.ZodType<Prisma.LandInfoUncheckedUpdateWithoutListingInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lotNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landAreaSqm: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  appraisedPricePerSqm: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  landCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  zoningArea: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  usageStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownershipType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownershipChangeDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownershipChangeReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roadContactType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  topography: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landShape: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nationalLandUsePlan: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nationalLandUsePlanStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  otherLandUsePlan: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  otherLandUsePlanStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ListingCreateWithoutLandInfoInputSchema: z.ZodType<Prisma.ListingCreateWithoutLandInfoInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listingType: z.lazy(() => ListingTypeSchema),
  location: z.string(),
  roadAddress: z.string(),
  buildingName: z.string(),
  internalManagementId: z.string(),
  currentStatus: z.string(),
  mainCategory: z.string(),
  subCategory: z.string(),
  label: z.string(),
  isHidden: z.boolean().optional(),
  photos: z.union([ z.lazy(() => ListingCreatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.number().int(),
  currentFloors: z.string(),
  landArea: z.number(),
  totalFloorArea: z.number(),
  buildingArea: z.number(),
  grossFloorAreaForFAR: z.number(),
  primaryUsage: z.string(),
  primaryStructure: z.string(),
  elevator: z.string(),
  parking: z.string(),
  roadWidth: z.string(),
  additionalUsage: z.string().optional().nullable(),
  buildingHeight: z.string(),
  roofStructure: z.string(),
  numberOfHouseholds: z.number().int(),
  approvalDate: z.coerce.date().optional().nullable(),
  constructionStartDate: z.coerce.date().optional().nullable(),
  occupancyApprovalDate: z.coerce.date().optional().nullable(),
  renovationDate: z.coerce.date().optional().nullable(),
  rentalUsage: z.string().optional().nullable(),
  rentalArea: z.number().optional().nullable(),
  exclusiveArea: z.number().optional().nullable(),
  heating: z.string().optional().nullable(),
  deposit: z.bigint().optional().nullable(),
  monthlyRent: z.bigint().optional().nullable(),
  fixedMonthlyCost: z.bigint().optional().nullable(),
  maintenanceFeeRental: z.bigint().optional().nullable(),
  tax: z.boolean().optional().nullable(),
  purchasePrice: z.bigint().optional().nullable(),
  depositPrice: z.bigint().optional().nullable(),
  yield: z.number().optional().nullable(),
  averagePrice: z.bigint().optional().nullable(),
  securityDeposit: z.bigint().optional().nullable(),
  monthlyRentSale: z.bigint().optional().nullable(),
  maintenanceFeeSale: z.bigint().optional().nullable(),
  loanStatus: z.string().optional().nullable(),
  agency: z.lazy(() => AgencyCreateNestedOneWithoutListingsInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutListingsInputSchema),
  comments: z.lazy(() => CommentCreateNestedManyWithoutListingInputSchema).optional()
}).strict();

export const ListingUncheckedCreateWithoutLandInfoInputSchema: z.ZodType<Prisma.ListingUncheckedCreateWithoutLandInfoInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listingType: z.lazy(() => ListingTypeSchema),
  location: z.string(),
  roadAddress: z.string(),
  buildingName: z.string(),
  internalManagementId: z.string(),
  currentStatus: z.string(),
  mainCategory: z.string(),
  subCategory: z.string(),
  label: z.string(),
  isHidden: z.boolean().optional(),
  photos: z.union([ z.lazy(() => ListingCreatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.number().int(),
  currentFloors: z.string(),
  landArea: z.number(),
  totalFloorArea: z.number(),
  buildingArea: z.number(),
  grossFloorAreaForFAR: z.number(),
  primaryUsage: z.string(),
  primaryStructure: z.string(),
  elevator: z.string(),
  parking: z.string(),
  roadWidth: z.string(),
  additionalUsage: z.string().optional().nullable(),
  buildingHeight: z.string(),
  roofStructure: z.string(),
  numberOfHouseholds: z.number().int(),
  approvalDate: z.coerce.date().optional().nullable(),
  constructionStartDate: z.coerce.date().optional().nullable(),
  occupancyApprovalDate: z.coerce.date().optional().nullable(),
  renovationDate: z.coerce.date().optional().nullable(),
  rentalUsage: z.string().optional().nullable(),
  rentalArea: z.number().optional().nullable(),
  exclusiveArea: z.number().optional().nullable(),
  heating: z.string().optional().nullable(),
  deposit: z.bigint().optional().nullable(),
  monthlyRent: z.bigint().optional().nullable(),
  fixedMonthlyCost: z.bigint().optional().nullable(),
  maintenanceFeeRental: z.bigint().optional().nullable(),
  tax: z.boolean().optional().nullable(),
  purchasePrice: z.bigint().optional().nullable(),
  depositPrice: z.bigint().optional().nullable(),
  yield: z.number().optional().nullable(),
  averagePrice: z.bigint().optional().nullable(),
  securityDeposit: z.bigint().optional().nullable(),
  monthlyRentSale: z.bigint().optional().nullable(),
  maintenanceFeeSale: z.bigint().optional().nullable(),
  loanStatus: z.string().optional().nullable(),
  agencyId: z.string(),
  userId: z.string(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutListingInputSchema).optional()
}).strict();

export const ListingCreateOrConnectWithoutLandInfoInputSchema: z.ZodType<Prisma.ListingCreateOrConnectWithoutLandInfoInput> = z.object({
  where: z.lazy(() => ListingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ListingCreateWithoutLandInfoInputSchema),z.lazy(() => ListingUncheckedCreateWithoutLandInfoInputSchema) ]),
}).strict();

export const ListingUpsertWithoutLandInfoInputSchema: z.ZodType<Prisma.ListingUpsertWithoutLandInfoInput> = z.object({
  update: z.union([ z.lazy(() => ListingUpdateWithoutLandInfoInputSchema),z.lazy(() => ListingUncheckedUpdateWithoutLandInfoInputSchema) ]),
  create: z.union([ z.lazy(() => ListingCreateWithoutLandInfoInputSchema),z.lazy(() => ListingUncheckedCreateWithoutLandInfoInputSchema) ]),
  where: z.lazy(() => ListingWhereInputSchema).optional()
}).strict();

export const ListingUpdateToOneWithWhereWithoutLandInfoInputSchema: z.ZodType<Prisma.ListingUpdateToOneWithWhereWithoutLandInfoInput> = z.object({
  where: z.lazy(() => ListingWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ListingUpdateWithoutLandInfoInputSchema),z.lazy(() => ListingUncheckedUpdateWithoutLandInfoInputSchema) ]),
}).strict();

export const ListingUpdateWithoutLandInfoInputSchema: z.ZodType<Prisma.ListingUpdateWithoutLandInfoInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listingType: z.union([ z.lazy(() => ListingTypeSchema),z.lazy(() => EnumListingTypeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadAddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  buildingName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  internalManagementId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mainCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  subCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isHidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  photos: z.union([ z.lazy(() => ListingUpdatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  currentFloors: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  totalFloorArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  buildingArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  grossFloorAreaForFAR: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  primaryUsage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  primaryStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  elevator: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parking: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadWidth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  additionalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  buildingHeight: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roofStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  numberOfHouseholds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approvalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  constructionStartDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  occupancyApprovalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  renovationDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  exclusiveArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  heating: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRent: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fixedMonthlyCost: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeRental: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tax: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchasePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  depositPrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  yield: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  averagePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  securityDeposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRentSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loanStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  agency: z.lazy(() => AgencyUpdateOneRequiredWithoutListingsNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutListingsNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutListingNestedInputSchema).optional()
}).strict();

export const ListingUncheckedUpdateWithoutLandInfoInputSchema: z.ZodType<Prisma.ListingUncheckedUpdateWithoutLandInfoInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listingType: z.union([ z.lazy(() => ListingTypeSchema),z.lazy(() => EnumListingTypeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadAddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  buildingName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  internalManagementId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mainCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  subCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isHidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  photos: z.union([ z.lazy(() => ListingUpdatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  currentFloors: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  totalFloorArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  buildingArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  grossFloorAreaForFAR: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  primaryUsage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  primaryStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  elevator: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parking: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadWidth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  additionalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  buildingHeight: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roofStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  numberOfHouseholds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approvalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  constructionStartDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  occupancyApprovalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  renovationDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  exclusiveArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  heating: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRent: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fixedMonthlyCost: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeRental: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tax: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchasePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  depositPrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  yield: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  averagePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  securityDeposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRentSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loanStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  agencyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutListingNestedInputSchema).optional()
}).strict();

export const ListingCreateWithoutCommentsInputSchema: z.ZodType<Prisma.ListingCreateWithoutCommentsInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listingType: z.lazy(() => ListingTypeSchema),
  location: z.string(),
  roadAddress: z.string(),
  buildingName: z.string(),
  internalManagementId: z.string(),
  currentStatus: z.string(),
  mainCategory: z.string(),
  subCategory: z.string(),
  label: z.string(),
  isHidden: z.boolean().optional(),
  photos: z.union([ z.lazy(() => ListingCreatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.number().int(),
  currentFloors: z.string(),
  landArea: z.number(),
  totalFloorArea: z.number(),
  buildingArea: z.number(),
  grossFloorAreaForFAR: z.number(),
  primaryUsage: z.string(),
  primaryStructure: z.string(),
  elevator: z.string(),
  parking: z.string(),
  roadWidth: z.string(),
  additionalUsage: z.string().optional().nullable(),
  buildingHeight: z.string(),
  roofStructure: z.string(),
  numberOfHouseholds: z.number().int(),
  approvalDate: z.coerce.date().optional().nullable(),
  constructionStartDate: z.coerce.date().optional().nullable(),
  occupancyApprovalDate: z.coerce.date().optional().nullable(),
  renovationDate: z.coerce.date().optional().nullable(),
  rentalUsage: z.string().optional().nullable(),
  rentalArea: z.number().optional().nullable(),
  exclusiveArea: z.number().optional().nullable(),
  heating: z.string().optional().nullable(),
  deposit: z.bigint().optional().nullable(),
  monthlyRent: z.bigint().optional().nullable(),
  fixedMonthlyCost: z.bigint().optional().nullable(),
  maintenanceFeeRental: z.bigint().optional().nullable(),
  tax: z.boolean().optional().nullable(),
  purchasePrice: z.bigint().optional().nullable(),
  depositPrice: z.bigint().optional().nullable(),
  yield: z.number().optional().nullable(),
  averagePrice: z.bigint().optional().nullable(),
  securityDeposit: z.bigint().optional().nullable(),
  monthlyRentSale: z.bigint().optional().nullable(),
  maintenanceFeeSale: z.bigint().optional().nullable(),
  loanStatus: z.string().optional().nullable(),
  agency: z.lazy(() => AgencyCreateNestedOneWithoutListingsInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutListingsInputSchema),
  landInfo: z.lazy(() => LandInfoCreateNestedOneWithoutListingInputSchema).optional()
}).strict();

export const ListingUncheckedCreateWithoutCommentsInputSchema: z.ZodType<Prisma.ListingUncheckedCreateWithoutCommentsInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listingType: z.lazy(() => ListingTypeSchema),
  location: z.string(),
  roadAddress: z.string(),
  buildingName: z.string(),
  internalManagementId: z.string(),
  currentStatus: z.string(),
  mainCategory: z.string(),
  subCategory: z.string(),
  label: z.string(),
  isHidden: z.boolean().optional(),
  photos: z.union([ z.lazy(() => ListingCreatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.number().int(),
  currentFloors: z.string(),
  landArea: z.number(),
  totalFloorArea: z.number(),
  buildingArea: z.number(),
  grossFloorAreaForFAR: z.number(),
  primaryUsage: z.string(),
  primaryStructure: z.string(),
  elevator: z.string(),
  parking: z.string(),
  roadWidth: z.string(),
  additionalUsage: z.string().optional().nullable(),
  buildingHeight: z.string(),
  roofStructure: z.string(),
  numberOfHouseholds: z.number().int(),
  approvalDate: z.coerce.date().optional().nullable(),
  constructionStartDate: z.coerce.date().optional().nullable(),
  occupancyApprovalDate: z.coerce.date().optional().nullable(),
  renovationDate: z.coerce.date().optional().nullable(),
  rentalUsage: z.string().optional().nullable(),
  rentalArea: z.number().optional().nullable(),
  exclusiveArea: z.number().optional().nullable(),
  heating: z.string().optional().nullable(),
  deposit: z.bigint().optional().nullable(),
  monthlyRent: z.bigint().optional().nullable(),
  fixedMonthlyCost: z.bigint().optional().nullable(),
  maintenanceFeeRental: z.bigint().optional().nullable(),
  tax: z.boolean().optional().nullable(),
  purchasePrice: z.bigint().optional().nullable(),
  depositPrice: z.bigint().optional().nullable(),
  yield: z.number().optional().nullable(),
  averagePrice: z.bigint().optional().nullable(),
  securityDeposit: z.bigint().optional().nullable(),
  monthlyRentSale: z.bigint().optional().nullable(),
  maintenanceFeeSale: z.bigint().optional().nullable(),
  loanStatus: z.string().optional().nullable(),
  agencyId: z.string(),
  userId: z.string(),
  landInfo: z.lazy(() => LandInfoUncheckedCreateNestedOneWithoutListingInputSchema).optional()
}).strict();

export const ListingCreateOrConnectWithoutCommentsInputSchema: z.ZodType<Prisma.ListingCreateOrConnectWithoutCommentsInput> = z.object({
  where: z.lazy(() => ListingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ListingCreateWithoutCommentsInputSchema),z.lazy(() => ListingUncheckedCreateWithoutCommentsInputSchema) ]),
}).strict();

export const UserCreateWithoutCommentsInputSchema: z.ZodType<Prisma.UserCreateWithoutCommentsInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  phone: z.string().optional().nullable(),
  tel: z.string().optional().nullable(),
  profileImage: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  agency: z.lazy(() => AgencyCreateNestedOneWithoutUsersInputSchema),
  listings: z.lazy(() => ListingCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutCommentsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCommentsInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  phone: z.string().optional().nullable(),
  tel: z.string().optional().nullable(),
  profileImage: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  agencyId: z.string(),
  listings: z.lazy(() => ListingUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutCommentsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCommentsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCommentsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCommentsInputSchema) ]),
}).strict();

export const ListingUpsertWithoutCommentsInputSchema: z.ZodType<Prisma.ListingUpsertWithoutCommentsInput> = z.object({
  update: z.union([ z.lazy(() => ListingUpdateWithoutCommentsInputSchema),z.lazy(() => ListingUncheckedUpdateWithoutCommentsInputSchema) ]),
  create: z.union([ z.lazy(() => ListingCreateWithoutCommentsInputSchema),z.lazy(() => ListingUncheckedCreateWithoutCommentsInputSchema) ]),
  where: z.lazy(() => ListingWhereInputSchema).optional()
}).strict();

export const ListingUpdateToOneWithWhereWithoutCommentsInputSchema: z.ZodType<Prisma.ListingUpdateToOneWithWhereWithoutCommentsInput> = z.object({
  where: z.lazy(() => ListingWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ListingUpdateWithoutCommentsInputSchema),z.lazy(() => ListingUncheckedUpdateWithoutCommentsInputSchema) ]),
}).strict();

export const ListingUpdateWithoutCommentsInputSchema: z.ZodType<Prisma.ListingUpdateWithoutCommentsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listingType: z.union([ z.lazy(() => ListingTypeSchema),z.lazy(() => EnumListingTypeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadAddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  buildingName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  internalManagementId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mainCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  subCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isHidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  photos: z.union([ z.lazy(() => ListingUpdatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  currentFloors: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  totalFloorArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  buildingArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  grossFloorAreaForFAR: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  primaryUsage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  primaryStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  elevator: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parking: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadWidth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  additionalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  buildingHeight: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roofStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  numberOfHouseholds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approvalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  constructionStartDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  occupancyApprovalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  renovationDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  exclusiveArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  heating: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRent: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fixedMonthlyCost: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeRental: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tax: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchasePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  depositPrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  yield: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  averagePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  securityDeposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRentSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loanStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  agency: z.lazy(() => AgencyUpdateOneRequiredWithoutListingsNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutListingsNestedInputSchema).optional(),
  landInfo: z.lazy(() => LandInfoUpdateOneWithoutListingNestedInputSchema).optional()
}).strict();

export const ListingUncheckedUpdateWithoutCommentsInputSchema: z.ZodType<Prisma.ListingUncheckedUpdateWithoutCommentsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listingType: z.union([ z.lazy(() => ListingTypeSchema),z.lazy(() => EnumListingTypeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadAddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  buildingName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  internalManagementId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mainCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  subCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isHidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  photos: z.union([ z.lazy(() => ListingUpdatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  currentFloors: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  totalFloorArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  buildingArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  grossFloorAreaForFAR: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  primaryUsage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  primaryStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  elevator: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parking: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadWidth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  additionalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  buildingHeight: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roofStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  numberOfHouseholds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approvalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  constructionStartDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  occupancyApprovalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  renovationDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  exclusiveArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  heating: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRent: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fixedMonthlyCost: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeRental: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tax: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchasePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  depositPrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  yield: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  averagePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  securityDeposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRentSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loanStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  agencyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landInfo: z.lazy(() => LandInfoUncheckedUpdateOneWithoutListingNestedInputSchema).optional()
}).strict();

export const UserUpsertWithoutCommentsInputSchema: z.ZodType<Prisma.UserUpsertWithoutCommentsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCommentsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCommentsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCommentsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCommentsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutCommentsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCommentsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCommentsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCommentsInputSchema) ]),
}).strict();

export const UserUpdateWithoutCommentsInputSchema: z.ZodType<Prisma.UserUpdateWithoutCommentsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tel: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  agency: z.lazy(() => AgencyUpdateOneRequiredWithoutUsersNestedInputSchema).optional(),
  listings: z.lazy(() => ListingUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutCommentsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCommentsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tel: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  agencyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  listings: z.lazy(() => ListingUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyAgencyInputSchema: z.ZodType<Prisma.UserCreateManyAgencyInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  phone: z.string().optional().nullable(),
  tel: z.string().optional().nullable(),
  profileImage: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ListingCreateManyAgencyInputSchema: z.ZodType<Prisma.ListingCreateManyAgencyInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listingType: z.lazy(() => ListingTypeSchema),
  location: z.string(),
  roadAddress: z.string(),
  buildingName: z.string(),
  internalManagementId: z.string(),
  currentStatus: z.string(),
  mainCategory: z.string(),
  subCategory: z.string(),
  label: z.string(),
  isHidden: z.boolean().optional(),
  photos: z.union([ z.lazy(() => ListingCreatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.number().int(),
  currentFloors: z.string(),
  landArea: z.number(),
  totalFloorArea: z.number(),
  buildingArea: z.number(),
  grossFloorAreaForFAR: z.number(),
  primaryUsage: z.string(),
  primaryStructure: z.string(),
  elevator: z.string(),
  parking: z.string(),
  roadWidth: z.string(),
  additionalUsage: z.string().optional().nullable(),
  buildingHeight: z.string(),
  roofStructure: z.string(),
  numberOfHouseholds: z.number().int(),
  approvalDate: z.coerce.date().optional().nullable(),
  constructionStartDate: z.coerce.date().optional().nullable(),
  occupancyApprovalDate: z.coerce.date().optional().nullable(),
  renovationDate: z.coerce.date().optional().nullable(),
  rentalUsage: z.string().optional().nullable(),
  rentalArea: z.number().optional().nullable(),
  exclusiveArea: z.number().optional().nullable(),
  heating: z.string().optional().nullable(),
  deposit: z.bigint().optional().nullable(),
  monthlyRent: z.bigint().optional().nullable(),
  fixedMonthlyCost: z.bigint().optional().nullable(),
  maintenanceFeeRental: z.bigint().optional().nullable(),
  tax: z.boolean().optional().nullable(),
  purchasePrice: z.bigint().optional().nullable(),
  depositPrice: z.bigint().optional().nullable(),
  yield: z.number().optional().nullable(),
  averagePrice: z.bigint().optional().nullable(),
  securityDeposit: z.bigint().optional().nullable(),
  monthlyRentSale: z.bigint().optional().nullable(),
  maintenanceFeeSale: z.bigint().optional().nullable(),
  loanStatus: z.string().optional().nullable(),
  userId: z.string()
}).strict();

export const UserUpdateWithoutAgencyInputSchema: z.ZodType<Prisma.UserUpdateWithoutAgencyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tel: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listings: z.lazy(() => ListingUpdateManyWithoutUserNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAgencyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAgencyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tel: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listings: z.lazy(() => ListingUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateManyWithoutAgencyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutAgencyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tel: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ListingUpdateWithoutAgencyInputSchema: z.ZodType<Prisma.ListingUpdateWithoutAgencyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listingType: z.union([ z.lazy(() => ListingTypeSchema),z.lazy(() => EnumListingTypeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadAddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  buildingName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  internalManagementId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mainCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  subCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isHidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  photos: z.union([ z.lazy(() => ListingUpdatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  currentFloors: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  totalFloorArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  buildingArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  grossFloorAreaForFAR: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  primaryUsage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  primaryStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  elevator: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parking: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadWidth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  additionalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  buildingHeight: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roofStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  numberOfHouseholds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approvalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  constructionStartDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  occupancyApprovalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  renovationDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  exclusiveArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  heating: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRent: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fixedMonthlyCost: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeRental: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tax: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchasePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  depositPrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  yield: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  averagePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  securityDeposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRentSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loanStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutListingsNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutListingNestedInputSchema).optional(),
  landInfo: z.lazy(() => LandInfoUpdateOneWithoutListingNestedInputSchema).optional()
}).strict();

export const ListingUncheckedUpdateWithoutAgencyInputSchema: z.ZodType<Prisma.ListingUncheckedUpdateWithoutAgencyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listingType: z.union([ z.lazy(() => ListingTypeSchema),z.lazy(() => EnumListingTypeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadAddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  buildingName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  internalManagementId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mainCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  subCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isHidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  photos: z.union([ z.lazy(() => ListingUpdatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  currentFloors: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  totalFloorArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  buildingArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  grossFloorAreaForFAR: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  primaryUsage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  primaryStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  elevator: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parking: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadWidth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  additionalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  buildingHeight: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roofStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  numberOfHouseholds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approvalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  constructionStartDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  occupancyApprovalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  renovationDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  exclusiveArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  heating: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRent: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fixedMonthlyCost: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeRental: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tax: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchasePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  depositPrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  yield: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  averagePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  securityDeposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRentSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loanStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutListingNestedInputSchema).optional(),
  landInfo: z.lazy(() => LandInfoUncheckedUpdateOneWithoutListingNestedInputSchema).optional()
}).strict();

export const ListingUncheckedUpdateManyWithoutAgencyInputSchema: z.ZodType<Prisma.ListingUncheckedUpdateManyWithoutAgencyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listingType: z.union([ z.lazy(() => ListingTypeSchema),z.lazy(() => EnumListingTypeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadAddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  buildingName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  internalManagementId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mainCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  subCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isHidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  photos: z.union([ z.lazy(() => ListingUpdatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  currentFloors: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  totalFloorArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  buildingArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  grossFloorAreaForFAR: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  primaryUsage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  primaryStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  elevator: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parking: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadWidth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  additionalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  buildingHeight: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roofStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  numberOfHouseholds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approvalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  constructionStartDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  occupancyApprovalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  renovationDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  exclusiveArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  heating: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRent: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fixedMonthlyCost: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeRental: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tax: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchasePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  depositPrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  yield: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  averagePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  securityDeposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRentSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loanStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ListingCreateManyUserInputSchema: z.ZodType<Prisma.ListingCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listingType: z.lazy(() => ListingTypeSchema),
  location: z.string(),
  roadAddress: z.string(),
  buildingName: z.string(),
  internalManagementId: z.string(),
  currentStatus: z.string(),
  mainCategory: z.string(),
  subCategory: z.string(),
  label: z.string(),
  isHidden: z.boolean().optional(),
  photos: z.union([ z.lazy(() => ListingCreatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.number().int(),
  currentFloors: z.string(),
  landArea: z.number(),
  totalFloorArea: z.number(),
  buildingArea: z.number(),
  grossFloorAreaForFAR: z.number(),
  primaryUsage: z.string(),
  primaryStructure: z.string(),
  elevator: z.string(),
  parking: z.string(),
  roadWidth: z.string(),
  additionalUsage: z.string().optional().nullable(),
  buildingHeight: z.string(),
  roofStructure: z.string(),
  numberOfHouseholds: z.number().int(),
  approvalDate: z.coerce.date().optional().nullable(),
  constructionStartDate: z.coerce.date().optional().nullable(),
  occupancyApprovalDate: z.coerce.date().optional().nullable(),
  renovationDate: z.coerce.date().optional().nullable(),
  rentalUsage: z.string().optional().nullable(),
  rentalArea: z.number().optional().nullable(),
  exclusiveArea: z.number().optional().nullable(),
  heating: z.string().optional().nullable(),
  deposit: z.bigint().optional().nullable(),
  monthlyRent: z.bigint().optional().nullable(),
  fixedMonthlyCost: z.bigint().optional().nullable(),
  maintenanceFeeRental: z.bigint().optional().nullable(),
  tax: z.boolean().optional().nullable(),
  purchasePrice: z.bigint().optional().nullable(),
  depositPrice: z.bigint().optional().nullable(),
  yield: z.number().optional().nullable(),
  averagePrice: z.bigint().optional().nullable(),
  securityDeposit: z.bigint().optional().nullable(),
  monthlyRentSale: z.bigint().optional().nullable(),
  maintenanceFeeSale: z.bigint().optional().nullable(),
  loanStatus: z.string().optional().nullable(),
  agencyId: z.string()
}).strict();

export const CommentCreateManyUserInputSchema: z.ZodType<Prisma.CommentCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  recordType: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  listingId: z.string()
}).strict();

export const ListingUpdateWithoutUserInputSchema: z.ZodType<Prisma.ListingUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listingType: z.union([ z.lazy(() => ListingTypeSchema),z.lazy(() => EnumListingTypeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadAddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  buildingName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  internalManagementId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mainCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  subCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isHidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  photos: z.union([ z.lazy(() => ListingUpdatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  currentFloors: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  totalFloorArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  buildingArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  grossFloorAreaForFAR: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  primaryUsage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  primaryStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  elevator: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parking: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadWidth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  additionalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  buildingHeight: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roofStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  numberOfHouseholds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approvalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  constructionStartDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  occupancyApprovalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  renovationDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  exclusiveArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  heating: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRent: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fixedMonthlyCost: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeRental: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tax: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchasePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  depositPrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  yield: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  averagePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  securityDeposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRentSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loanStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  agency: z.lazy(() => AgencyUpdateOneRequiredWithoutListingsNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutListingNestedInputSchema).optional(),
  landInfo: z.lazy(() => LandInfoUpdateOneWithoutListingNestedInputSchema).optional()
}).strict();

export const ListingUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.ListingUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listingType: z.union([ z.lazy(() => ListingTypeSchema),z.lazy(() => EnumListingTypeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadAddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  buildingName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  internalManagementId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mainCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  subCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isHidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  photos: z.union([ z.lazy(() => ListingUpdatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  currentFloors: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  totalFloorArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  buildingArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  grossFloorAreaForFAR: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  primaryUsage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  primaryStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  elevator: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parking: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadWidth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  additionalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  buildingHeight: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roofStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  numberOfHouseholds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approvalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  constructionStartDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  occupancyApprovalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  renovationDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  exclusiveArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  heating: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRent: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fixedMonthlyCost: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeRental: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tax: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchasePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  depositPrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  yield: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  averagePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  securityDeposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRentSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loanStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  agencyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutListingNestedInputSchema).optional(),
  landInfo: z.lazy(() => LandInfoUncheckedUpdateOneWithoutListingNestedInputSchema).optional()
}).strict();

export const ListingUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.ListingUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listingType: z.union([ z.lazy(() => ListingTypeSchema),z.lazy(() => EnumListingTypeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadAddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  buildingName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  internalManagementId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mainCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  subCategory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isHidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  photos: z.union([ z.lazy(() => ListingUpdatephotosInputSchema),z.string().array() ]).optional(),
  totalFloors: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  currentFloors: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  landArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  totalFloorArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  buildingArea: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  grossFloorAreaForFAR: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  primaryUsage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  primaryStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  elevator: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parking: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roadWidth: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  additionalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  buildingHeight: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roofStructure: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  numberOfHouseholds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approvalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  constructionStartDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  occupancyApprovalDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  renovationDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rentalArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  exclusiveArea: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  heating: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRent: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fixedMonthlyCost: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeRental: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tax: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchasePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  depositPrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  yield: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  averagePrice: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  securityDeposit: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyRentSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  maintenanceFeeSale: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  loanStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  agencyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CommentUpdateWithoutUserInputSchema: z.ZodType<Prisma.CommentUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recordType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listing: z.lazy(() => ListingUpdateOneRequiredWithoutCommentsNestedInputSchema).optional()
}).strict();

export const CommentUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recordType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CommentUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recordType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  listingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CommentCreateManyListingInputSchema: z.ZodType<Prisma.CommentCreateManyListingInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  recordType: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();

export const CommentUpdateWithoutListingInputSchema: z.ZodType<Prisma.CommentUpdateWithoutListingInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recordType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCommentsNestedInputSchema).optional()
}).strict();

export const CommentUncheckedUpdateWithoutListingInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateWithoutListingInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recordType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CommentUncheckedUpdateManyWithoutListingInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateManyWithoutListingInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recordType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const AgencyFindFirstArgsSchema: z.ZodType<Prisma.AgencyFindFirstArgs> = z.object({
  select: AgencySelectSchema.optional(),
  include: AgencyIncludeSchema.optional(),
  where: AgencyWhereInputSchema.optional(),
  orderBy: z.union([ AgencyOrderByWithRelationInputSchema.array(),AgencyOrderByWithRelationInputSchema ]).optional(),
  cursor: AgencyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AgencyScalarFieldEnumSchema,AgencyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AgencyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AgencyFindFirstOrThrowArgs> = z.object({
  select: AgencySelectSchema.optional(),
  include: AgencyIncludeSchema.optional(),
  where: AgencyWhereInputSchema.optional(),
  orderBy: z.union([ AgencyOrderByWithRelationInputSchema.array(),AgencyOrderByWithRelationInputSchema ]).optional(),
  cursor: AgencyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AgencyScalarFieldEnumSchema,AgencyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AgencyFindManyArgsSchema: z.ZodType<Prisma.AgencyFindManyArgs> = z.object({
  select: AgencySelectSchema.optional(),
  include: AgencyIncludeSchema.optional(),
  where: AgencyWhereInputSchema.optional(),
  orderBy: z.union([ AgencyOrderByWithRelationInputSchema.array(),AgencyOrderByWithRelationInputSchema ]).optional(),
  cursor: AgencyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AgencyScalarFieldEnumSchema,AgencyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AgencyAggregateArgsSchema: z.ZodType<Prisma.AgencyAggregateArgs> = z.object({
  where: AgencyWhereInputSchema.optional(),
  orderBy: z.union([ AgencyOrderByWithRelationInputSchema.array(),AgencyOrderByWithRelationInputSchema ]).optional(),
  cursor: AgencyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AgencyGroupByArgsSchema: z.ZodType<Prisma.AgencyGroupByArgs> = z.object({
  where: AgencyWhereInputSchema.optional(),
  orderBy: z.union([ AgencyOrderByWithAggregationInputSchema.array(),AgencyOrderByWithAggregationInputSchema ]).optional(),
  by: AgencyScalarFieldEnumSchema.array(),
  having: AgencyScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AgencyFindUniqueArgsSchema: z.ZodType<Prisma.AgencyFindUniqueArgs> = z.object({
  select: AgencySelectSchema.optional(),
  include: AgencyIncludeSchema.optional(),
  where: AgencyWhereUniqueInputSchema,
}).strict() ;

export const AgencyFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AgencyFindUniqueOrThrowArgs> = z.object({
  select: AgencySelectSchema.optional(),
  include: AgencyIncludeSchema.optional(),
  where: AgencyWhereUniqueInputSchema,
}).strict() ;

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const ListingFindFirstArgsSchema: z.ZodType<Prisma.ListingFindFirstArgs> = z.object({
  select: ListingSelectSchema.optional(),
  include: ListingIncludeSchema.optional(),
  where: ListingWhereInputSchema.optional(),
  orderBy: z.union([ ListingOrderByWithRelationInputSchema.array(),ListingOrderByWithRelationInputSchema ]).optional(),
  cursor: ListingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ListingScalarFieldEnumSchema,ListingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ListingFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ListingFindFirstOrThrowArgs> = z.object({
  select: ListingSelectSchema.optional(),
  include: ListingIncludeSchema.optional(),
  where: ListingWhereInputSchema.optional(),
  orderBy: z.union([ ListingOrderByWithRelationInputSchema.array(),ListingOrderByWithRelationInputSchema ]).optional(),
  cursor: ListingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ListingScalarFieldEnumSchema,ListingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ListingFindManyArgsSchema: z.ZodType<Prisma.ListingFindManyArgs> = z.object({
  select: ListingSelectSchema.optional(),
  include: ListingIncludeSchema.optional(),
  where: ListingWhereInputSchema.optional(),
  orderBy: z.union([ ListingOrderByWithRelationInputSchema.array(),ListingOrderByWithRelationInputSchema ]).optional(),
  cursor: ListingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ListingScalarFieldEnumSchema,ListingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ListingAggregateArgsSchema: z.ZodType<Prisma.ListingAggregateArgs> = z.object({
  where: ListingWhereInputSchema.optional(),
  orderBy: z.union([ ListingOrderByWithRelationInputSchema.array(),ListingOrderByWithRelationInputSchema ]).optional(),
  cursor: ListingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ListingGroupByArgsSchema: z.ZodType<Prisma.ListingGroupByArgs> = z.object({
  where: ListingWhereInputSchema.optional(),
  orderBy: z.union([ ListingOrderByWithAggregationInputSchema.array(),ListingOrderByWithAggregationInputSchema ]).optional(),
  by: ListingScalarFieldEnumSchema.array(),
  having: ListingScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ListingFindUniqueArgsSchema: z.ZodType<Prisma.ListingFindUniqueArgs> = z.object({
  select: ListingSelectSchema.optional(),
  include: ListingIncludeSchema.optional(),
  where: ListingWhereUniqueInputSchema,
}).strict() ;

export const ListingFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ListingFindUniqueOrThrowArgs> = z.object({
  select: ListingSelectSchema.optional(),
  include: ListingIncludeSchema.optional(),
  where: ListingWhereUniqueInputSchema,
}).strict() ;

export const LandInfoFindFirstArgsSchema: z.ZodType<Prisma.LandInfoFindFirstArgs> = z.object({
  select: LandInfoSelectSchema.optional(),
  include: LandInfoIncludeSchema.optional(),
  where: LandInfoWhereInputSchema.optional(),
  orderBy: z.union([ LandInfoOrderByWithRelationInputSchema.array(),LandInfoOrderByWithRelationInputSchema ]).optional(),
  cursor: LandInfoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LandInfoScalarFieldEnumSchema,LandInfoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LandInfoFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LandInfoFindFirstOrThrowArgs> = z.object({
  select: LandInfoSelectSchema.optional(),
  include: LandInfoIncludeSchema.optional(),
  where: LandInfoWhereInputSchema.optional(),
  orderBy: z.union([ LandInfoOrderByWithRelationInputSchema.array(),LandInfoOrderByWithRelationInputSchema ]).optional(),
  cursor: LandInfoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LandInfoScalarFieldEnumSchema,LandInfoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LandInfoFindManyArgsSchema: z.ZodType<Prisma.LandInfoFindManyArgs> = z.object({
  select: LandInfoSelectSchema.optional(),
  include: LandInfoIncludeSchema.optional(),
  where: LandInfoWhereInputSchema.optional(),
  orderBy: z.union([ LandInfoOrderByWithRelationInputSchema.array(),LandInfoOrderByWithRelationInputSchema ]).optional(),
  cursor: LandInfoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LandInfoScalarFieldEnumSchema,LandInfoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LandInfoAggregateArgsSchema: z.ZodType<Prisma.LandInfoAggregateArgs> = z.object({
  where: LandInfoWhereInputSchema.optional(),
  orderBy: z.union([ LandInfoOrderByWithRelationInputSchema.array(),LandInfoOrderByWithRelationInputSchema ]).optional(),
  cursor: LandInfoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LandInfoGroupByArgsSchema: z.ZodType<Prisma.LandInfoGroupByArgs> = z.object({
  where: LandInfoWhereInputSchema.optional(),
  orderBy: z.union([ LandInfoOrderByWithAggregationInputSchema.array(),LandInfoOrderByWithAggregationInputSchema ]).optional(),
  by: LandInfoScalarFieldEnumSchema.array(),
  having: LandInfoScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LandInfoFindUniqueArgsSchema: z.ZodType<Prisma.LandInfoFindUniqueArgs> = z.object({
  select: LandInfoSelectSchema.optional(),
  include: LandInfoIncludeSchema.optional(),
  where: LandInfoWhereUniqueInputSchema,
}).strict() ;

export const LandInfoFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LandInfoFindUniqueOrThrowArgs> = z.object({
  select: LandInfoSelectSchema.optional(),
  include: LandInfoIncludeSchema.optional(),
  where: LandInfoWhereUniqueInputSchema,
}).strict() ;

export const CommentFindFirstArgsSchema: z.ZodType<Prisma.CommentFindFirstArgs> = z.object({
  select: CommentSelectSchema.optional(),
  include: CommentIncludeSchema.optional(),
  where: CommentWhereInputSchema.optional(),
  orderBy: z.union([ CommentOrderByWithRelationInputSchema.array(),CommentOrderByWithRelationInputSchema ]).optional(),
  cursor: CommentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CommentScalarFieldEnumSchema,CommentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CommentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CommentFindFirstOrThrowArgs> = z.object({
  select: CommentSelectSchema.optional(),
  include: CommentIncludeSchema.optional(),
  where: CommentWhereInputSchema.optional(),
  orderBy: z.union([ CommentOrderByWithRelationInputSchema.array(),CommentOrderByWithRelationInputSchema ]).optional(),
  cursor: CommentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CommentScalarFieldEnumSchema,CommentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CommentFindManyArgsSchema: z.ZodType<Prisma.CommentFindManyArgs> = z.object({
  select: CommentSelectSchema.optional(),
  include: CommentIncludeSchema.optional(),
  where: CommentWhereInputSchema.optional(),
  orderBy: z.union([ CommentOrderByWithRelationInputSchema.array(),CommentOrderByWithRelationInputSchema ]).optional(),
  cursor: CommentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CommentScalarFieldEnumSchema,CommentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CommentAggregateArgsSchema: z.ZodType<Prisma.CommentAggregateArgs> = z.object({
  where: CommentWhereInputSchema.optional(),
  orderBy: z.union([ CommentOrderByWithRelationInputSchema.array(),CommentOrderByWithRelationInputSchema ]).optional(),
  cursor: CommentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CommentGroupByArgsSchema: z.ZodType<Prisma.CommentGroupByArgs> = z.object({
  where: CommentWhereInputSchema.optional(),
  orderBy: z.union([ CommentOrderByWithAggregationInputSchema.array(),CommentOrderByWithAggregationInputSchema ]).optional(),
  by: CommentScalarFieldEnumSchema.array(),
  having: CommentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CommentFindUniqueArgsSchema: z.ZodType<Prisma.CommentFindUniqueArgs> = z.object({
  select: CommentSelectSchema.optional(),
  include: CommentIncludeSchema.optional(),
  where: CommentWhereUniqueInputSchema,
}).strict() ;

export const CommentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CommentFindUniqueOrThrowArgs> = z.object({
  select: CommentSelectSchema.optional(),
  include: CommentIncludeSchema.optional(),
  where: CommentWhereUniqueInputSchema,
}).strict() ;

export const AgencyCreateArgsSchema: z.ZodType<Prisma.AgencyCreateArgs> = z.object({
  select: AgencySelectSchema.optional(),
  include: AgencyIncludeSchema.optional(),
  data: z.union([ AgencyCreateInputSchema,AgencyUncheckedCreateInputSchema ]),
}).strict() ;

export const AgencyUpsertArgsSchema: z.ZodType<Prisma.AgencyUpsertArgs> = z.object({
  select: AgencySelectSchema.optional(),
  include: AgencyIncludeSchema.optional(),
  where: AgencyWhereUniqueInputSchema,
  create: z.union([ AgencyCreateInputSchema,AgencyUncheckedCreateInputSchema ]),
  update: z.union([ AgencyUpdateInputSchema,AgencyUncheckedUpdateInputSchema ]),
}).strict() ;

export const AgencyCreateManyArgsSchema: z.ZodType<Prisma.AgencyCreateManyArgs> = z.object({
  data: z.union([ AgencyCreateManyInputSchema,AgencyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AgencyCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AgencyCreateManyAndReturnArgs> = z.object({
  data: z.union([ AgencyCreateManyInputSchema,AgencyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AgencyDeleteArgsSchema: z.ZodType<Prisma.AgencyDeleteArgs> = z.object({
  select: AgencySelectSchema.optional(),
  include: AgencyIncludeSchema.optional(),
  where: AgencyWhereUniqueInputSchema,
}).strict() ;

export const AgencyUpdateArgsSchema: z.ZodType<Prisma.AgencyUpdateArgs> = z.object({
  select: AgencySelectSchema.optional(),
  include: AgencyIncludeSchema.optional(),
  data: z.union([ AgencyUpdateInputSchema,AgencyUncheckedUpdateInputSchema ]),
  where: AgencyWhereUniqueInputSchema,
}).strict() ;

export const AgencyUpdateManyArgsSchema: z.ZodType<Prisma.AgencyUpdateManyArgs> = z.object({
  data: z.union([ AgencyUpdateManyMutationInputSchema,AgencyUncheckedUpdateManyInputSchema ]),
  where: AgencyWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const AgencyUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.AgencyUpdateManyAndReturnArgs> = z.object({
  data: z.union([ AgencyUpdateManyMutationInputSchema,AgencyUncheckedUpdateManyInputSchema ]),
  where: AgencyWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const AgencyDeleteManyArgsSchema: z.ZodType<Prisma.AgencyDeleteManyArgs> = z.object({
  where: AgencyWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UserUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ListingCreateArgsSchema: z.ZodType<Prisma.ListingCreateArgs> = z.object({
  select: ListingSelectSchema.optional(),
  include: ListingIncludeSchema.optional(),
  data: z.union([ ListingCreateInputSchema,ListingUncheckedCreateInputSchema ]),
}).strict() ;

export const ListingUpsertArgsSchema: z.ZodType<Prisma.ListingUpsertArgs> = z.object({
  select: ListingSelectSchema.optional(),
  include: ListingIncludeSchema.optional(),
  where: ListingWhereUniqueInputSchema,
  create: z.union([ ListingCreateInputSchema,ListingUncheckedCreateInputSchema ]),
  update: z.union([ ListingUpdateInputSchema,ListingUncheckedUpdateInputSchema ]),
}).strict() ;

export const ListingCreateManyArgsSchema: z.ZodType<Prisma.ListingCreateManyArgs> = z.object({
  data: z.union([ ListingCreateManyInputSchema,ListingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ListingCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ListingCreateManyAndReturnArgs> = z.object({
  data: z.union([ ListingCreateManyInputSchema,ListingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ListingDeleteArgsSchema: z.ZodType<Prisma.ListingDeleteArgs> = z.object({
  select: ListingSelectSchema.optional(),
  include: ListingIncludeSchema.optional(),
  where: ListingWhereUniqueInputSchema,
}).strict() ;

export const ListingUpdateArgsSchema: z.ZodType<Prisma.ListingUpdateArgs> = z.object({
  select: ListingSelectSchema.optional(),
  include: ListingIncludeSchema.optional(),
  data: z.union([ ListingUpdateInputSchema,ListingUncheckedUpdateInputSchema ]),
  where: ListingWhereUniqueInputSchema,
}).strict() ;

export const ListingUpdateManyArgsSchema: z.ZodType<Prisma.ListingUpdateManyArgs> = z.object({
  data: z.union([ ListingUpdateManyMutationInputSchema,ListingUncheckedUpdateManyInputSchema ]),
  where: ListingWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ListingUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ListingUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ListingUpdateManyMutationInputSchema,ListingUncheckedUpdateManyInputSchema ]),
  where: ListingWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ListingDeleteManyArgsSchema: z.ZodType<Prisma.ListingDeleteManyArgs> = z.object({
  where: ListingWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const LandInfoCreateArgsSchema: z.ZodType<Prisma.LandInfoCreateArgs> = z.object({
  select: LandInfoSelectSchema.optional(),
  include: LandInfoIncludeSchema.optional(),
  data: z.union([ LandInfoCreateInputSchema,LandInfoUncheckedCreateInputSchema ]),
}).strict() ;

export const LandInfoUpsertArgsSchema: z.ZodType<Prisma.LandInfoUpsertArgs> = z.object({
  select: LandInfoSelectSchema.optional(),
  include: LandInfoIncludeSchema.optional(),
  where: LandInfoWhereUniqueInputSchema,
  create: z.union([ LandInfoCreateInputSchema,LandInfoUncheckedCreateInputSchema ]),
  update: z.union([ LandInfoUpdateInputSchema,LandInfoUncheckedUpdateInputSchema ]),
}).strict() ;

export const LandInfoCreateManyArgsSchema: z.ZodType<Prisma.LandInfoCreateManyArgs> = z.object({
  data: z.union([ LandInfoCreateManyInputSchema,LandInfoCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const LandInfoCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LandInfoCreateManyAndReturnArgs> = z.object({
  data: z.union([ LandInfoCreateManyInputSchema,LandInfoCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const LandInfoDeleteArgsSchema: z.ZodType<Prisma.LandInfoDeleteArgs> = z.object({
  select: LandInfoSelectSchema.optional(),
  include: LandInfoIncludeSchema.optional(),
  where: LandInfoWhereUniqueInputSchema,
}).strict() ;

export const LandInfoUpdateArgsSchema: z.ZodType<Prisma.LandInfoUpdateArgs> = z.object({
  select: LandInfoSelectSchema.optional(),
  include: LandInfoIncludeSchema.optional(),
  data: z.union([ LandInfoUpdateInputSchema,LandInfoUncheckedUpdateInputSchema ]),
  where: LandInfoWhereUniqueInputSchema,
}).strict() ;

export const LandInfoUpdateManyArgsSchema: z.ZodType<Prisma.LandInfoUpdateManyArgs> = z.object({
  data: z.union([ LandInfoUpdateManyMutationInputSchema,LandInfoUncheckedUpdateManyInputSchema ]),
  where: LandInfoWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const LandInfoUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.LandInfoUpdateManyAndReturnArgs> = z.object({
  data: z.union([ LandInfoUpdateManyMutationInputSchema,LandInfoUncheckedUpdateManyInputSchema ]),
  where: LandInfoWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const LandInfoDeleteManyArgsSchema: z.ZodType<Prisma.LandInfoDeleteManyArgs> = z.object({
  where: LandInfoWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CommentCreateArgsSchema: z.ZodType<Prisma.CommentCreateArgs> = z.object({
  select: CommentSelectSchema.optional(),
  include: CommentIncludeSchema.optional(),
  data: z.union([ CommentCreateInputSchema,CommentUncheckedCreateInputSchema ]),
}).strict() ;

export const CommentUpsertArgsSchema: z.ZodType<Prisma.CommentUpsertArgs> = z.object({
  select: CommentSelectSchema.optional(),
  include: CommentIncludeSchema.optional(),
  where: CommentWhereUniqueInputSchema,
  create: z.union([ CommentCreateInputSchema,CommentUncheckedCreateInputSchema ]),
  update: z.union([ CommentUpdateInputSchema,CommentUncheckedUpdateInputSchema ]),
}).strict() ;

export const CommentCreateManyArgsSchema: z.ZodType<Prisma.CommentCreateManyArgs> = z.object({
  data: z.union([ CommentCreateManyInputSchema,CommentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CommentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CommentCreateManyAndReturnArgs> = z.object({
  data: z.union([ CommentCreateManyInputSchema,CommentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CommentDeleteArgsSchema: z.ZodType<Prisma.CommentDeleteArgs> = z.object({
  select: CommentSelectSchema.optional(),
  include: CommentIncludeSchema.optional(),
  where: CommentWhereUniqueInputSchema,
}).strict() ;

export const CommentUpdateArgsSchema: z.ZodType<Prisma.CommentUpdateArgs> = z.object({
  select: CommentSelectSchema.optional(),
  include: CommentIncludeSchema.optional(),
  data: z.union([ CommentUpdateInputSchema,CommentUncheckedUpdateInputSchema ]),
  where: CommentWhereUniqueInputSchema,
}).strict() ;

export const CommentUpdateManyArgsSchema: z.ZodType<Prisma.CommentUpdateManyArgs> = z.object({
  data: z.union([ CommentUpdateManyMutationInputSchema,CommentUncheckedUpdateManyInputSchema ]),
  where: CommentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CommentUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CommentUpdateManyAndReturnArgs> = z.object({
  data: z.union([ CommentUpdateManyMutationInputSchema,CommentUncheckedUpdateManyInputSchema ]),
  where: CommentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CommentDeleteManyArgsSchema: z.ZodType<Prisma.CommentDeleteManyArgs> = z.object({
  where: CommentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;