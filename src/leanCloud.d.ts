
export declare namespace LC {
  type User = {
    objectId: string;
    createdAt: string;
    updatedAt: string;

    sessionToken: string;
    username: string;
    phone?: string;
    shortId?: string;
    emailVerified: boolean;
    mobilePhoneVerified: boolean;

    access?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;

    email?: string;
    mobilePhoneNumber?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  // class
  type Class = {
    objectId?: string
    createdAt?: Date
    updatedAt?: Date
  }

  // search
  type SearchData = {
    hits: number;
    results: SearchResult[];
    sid: string;
  }
  type SearchResult = {
    _app_url: string;
    _deeplink: string;
    _highlight?: any;
    updatedAt: string;
    playerName: string;
    objectId: string;
    createdAt: string;
    cheatMode: boolean;
    score: number;
    [key: string]: any
  }
}

export type IDBConfig = {
  appId: string
  appKey: string
  serverURLs: string
}

export type IQuery = {
  where?: IWhere
  order?: string
  limit?: number
  skip?: number
  keys?: string
  count?: number
  include?: string
}

export type IWhere = {
  $and?: IWhere[]
  $or?: IWhere[]
  [key: string]: string | number | boolean | IWhereOpt | IWhere[] | undefined
}

export type IWhereOpt = {
  $ne?: any
  $lt?: any  // 小于
  $lte?: any  // 小于等于
  $gt?: any
  $gte?: any
  $regex?: string
    $options?: string // imxs
  $in?: string[] | number[]
  $nin?: string[] | number[]
  $all?: string[] | number[]
    $size?: number
  $exists?: boolean
  $select?: any
  $dontSelect?: any
  __op?: any
  [key: string]: any

  __type?: "Pointer"
  className?: string
  objectId?: string

  $inQuery?: {
    where: IWhere
    className: string
  }

  // location
  $nearSphere?: IGeoPoint,
  $maxDistanceInMiles?: number
  $maxDistanceInKilometers?: number
  $maxDistanceInRadians?: number
  $within?: {
    $box: IGeoPoint[]
  }
}

export type IGeoPoint = {
  __type: 'GeoPoint',
  latitude: number,
  longitude: number
}


export type CreatedResult = {
  createdAt: string,
  objectId: string,
}
// 一个请求是否成功是由 HTTP 状态码标明的。一个 2XX 的状态码表示成功，而一个 4XX 表示请求失败。当一个请求失败时响应的主体仍然是一个 JSON 对象，但是总是会包含 code 和 error 这两个字段，你可以用它们来进行调试。
export type ErrorResult = {
  code: number
  error: string
}
// fetchWhenSave 选项对更新对象也同样有效。 但和创建对象不同，用于更新对象时仅返回更新的字段，而非全部字段。
export type UpdatedResult = {
  updatedAt: string
  [updatedKey: string]: any
}
export type BatchResultItem = {
  error?: ErrorResult
  success?: {
    // create
    createdAt?: string,
    objectId?: string,
    // update
    updatedAt?: string
    [updatedKey: string]: any
  }
}
export type BatchCreateItem = {
  error?: ErrorResult
  success?: {
    createdAt: string,
    objectId: string,
  }
}
export type BatchUpdateItem = {
  error?: ErrorResult
  success?: {
    updatedAt?: string
    [updatedKey: string]: any
  }
}
export type BatchItem = {
  error?: ErrorResult
  success?: any
}