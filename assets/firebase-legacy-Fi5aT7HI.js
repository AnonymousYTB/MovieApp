System.register(["./vendor-legacy-AM_PYZTC.js"],(function(e,t){"use strict";var n,i;return{setters:[e=>{n=e.o,i=e._}],execute:function(){e({a:function(e,t){const n="object"==typeof e?e:we(),i="string"==typeof e?e:t||"(default)",s=ge(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const e=v("firestore");e&&function(e,t,n,i={}){var s;const r=(e=Fv(e,Vv))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==r.host&&r.host!==o&&df("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=of.MOCK_USER;else{t=b(i.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new yf(_f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new of(r)}e._authCredentials=new If(new wf(t,n))}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(s,...e)}return s},b:function(e=we(),t){const n=ge(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=v("database");e&&function(e,t,n,i={}){(e=G(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&Oi("Cannot call useEmulator() after instance has already been initialized.");const s=e._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Oi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Xi(Xi.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:b(i.mockUserToken,e.app.options.projectId);r=new Xi(t)}!function(e,t,n,i){e.repoInfo_=new is(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(s,t,n,r)}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(n,...e)}return n},c:function(e,t,...n){if(e=G(e),xv("collection","path",t),e instanceof Vv){const i=Lf.fromString(t,...n);return Lv(i),new Bv(e,null,i)}{if(!(e instanceof jv||e instanceof Bv))throw new yf(_f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Lf.fromString(t,...n));return Lv(i),new Bv(e.firestore,null,i)}},d:
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function(e){e=Fv(e,jv);const t=Fv(e.firestore,$v);return function(e,t,n={}){const i=new vf;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,s){const r=new bv({next:r=>{t.enqueueAndForget((()=>Ky(e,o)));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new yf(_f.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new yf(_f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:e=>s.reject(e)}),o=new Jy(gg(n.path),r,{includeMetadataChanges:!0,Z_:!0});return Hy(e,o)}(await Rv(e),e.asyncQueue,t,n,i))),i.promise}(Wv(t),e._key).then((n=>function(e,t,n){const i=n.docs.get(t._key),s=new Fw(e);return new xw(e,s,t._key,i,new Pw(n.hasPendingWrites,n.fromCache),t.converter)}
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(t,e,n)))},e:function(e,t,n){e=Fv(e,jv);const i=Fv(e.firestore,$v),s=Rw(e.converter,t,n);return function(e,t){return function(e,t){const n=new vf;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const i=function(e){const t=mf(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=hv.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=lv.bind(null,t),t}(e);try{const e=await function(e,t){const n=mf(e),i=Pf.now(),s=t.reduce(((e,t)=>e.add(t.key)),Vg());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Rg(),c=Vg();return n.os.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{r=s;const o=[];for(const e of t){const t=hm(e,r.get(e.key).overlayedDocument);null!=t&&o.push(new dm(e.key,t,qp(t.value.mapValue),im.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,o,t)})).next((t=>{o=t;const i=t.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:xg(r)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.Da[e.currentUser.toKey()];i||(i=new ap(Rf)),i=i.insert(t,n),e.Da[e.currentUser.toKey()]=i}(i,e.batchId,n),await yv(i,e.changes),await ky(i.remoteStore)}catch(e){const t=qy(e,"Failed to persist write");n.reject(t)}}(await function(e){return Av(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(Wv(e),t)}(i,[sw(iw(i),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,im.none())])},f:function(e,t,n){e=Fv(e,$v);const i=Object.assign(Object.assign({},Uw),n);return function(e){if(e.maxAttempts<1)throw new yf(_f.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(e,t,n){const i=new vf;return e.asyncQueue.enqueueAndForget((async()=>{const s=await function(e){return Av(e).then((e=>e.datastore))}(e);new Ev(e.asyncQueue,s,n,t,i).ja()})),i.promise}(Wv(e),(n=>t(new qw(e,n))),i)},g:function(e=we()){const t=ge(e,"auth");if(t.isInitialized())return t.getImmediate();const n=
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function(e,t){const n=ge(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(q(n.getOptions(),null!=t?t:{}))return e;Ve(e,"already-initialized")}const i=n.initialize({options:t});return i}(e,{popupRedirectResolver:ci,persistence:[In,rn,an]}),i=T("authTokenSyncURL");if(i){const e=pi(i);!function(e,t,n){G(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){G(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}const s=y("auth");return s&&function(e,t,n){const i=Ft(e);ze(i._canInitEmulator,i,"emulator-config-failed"),ze(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),r=qt(t),{host:o,port:a}=function(e){const t=qt(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const e=s[1];return{host:e,port:jt(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:jt(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */()}(n,`http://${s}`),n},h:function(e,t,n){var i;if(e=G(e),$a("Reference.transaction",e._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object.";const s=null===(i=null==n?void 0:n.applyLocally)||void 0===i||i,r=new I,a=xc(e,(()=>{}));return function(e,t,n,i,s,r){lc(e,"transaction on "+t);const a={path:t,update:n,onComplete:i,status:null,order:Si(),applyLocally:r,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},c=uc(e,t,void 0);a.currentInputSnapshot=c;const h=a.update(c.val());if(void 0===h)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{ja("transaction failed: Data returned ",h,a.path),a.status=0;const n=Sa(e.transactionQueueTree_,t),i=ka(n)||[];let s;i.push(a),Na(n,i),"object"==typeof h&&null!==h&&M(h,".priority")?(s=F(h,".priority"),o(Va(s),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):s=(ra(e.serverSyncTree_,t)||dr.EMPTY_NODE).getPriority().val();const r=ic(e),l=gr(h,s),u=ba(l,c,r);a.currentOutputSnapshotRaw=l,a.currentOutputSnapshotResolved=u,a.currentWriteId=ac(e);const d=ea(e.serverSyncTree_,t,u,a.currentWriteId,a.applyLocally);Qa(e.eventQueue_,t,d),dc(e,e.transactionQueueTree_)}}(e._repo,e._path,t,((t,n,i)=>{let s=null;t?r.reject(t):(s=new kc(i,new Sc(e._repo,e._path),sr),r.resolve(new qc(n,s)))}),a,s),r.promise},i:ve,j:xc,k:function(e){return $a("remove",e._path),Ac(e,null)},l:Ac,m:function(e,t,...n){if(e=G(e),1===arguments.length&&(t=Af.newId()),xv("doc","path",t),e instanceof Vv){const i=Lf.fromString(t,...n);return Ov(i),new jv(e,null,new Uf(i))}{if(!(e instanceof jv||e instanceof Bv))throw new yf(_f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Lf.fromString(t,...n));return Ov(i),new jv(e.firestore,e instanceof Bv?e.converter:null,new Uf(i))}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */,n:Nc,o:function(e,t,n,i){return G(e).onAuthStateChanged(t,n,i)},p:function(e){return G(e).signOut()},q:function(e){e=Fv(e,qv);const t=Fv(e.firestore,$v),n=Wv(t),i=new Fw(t);
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */return function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new yf(_f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),function(e,t,n={}){const i=new vf;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,s){const r=new bv({next:n=>{t.enqueueAndForget((()=>Ky(e,o))),n.fromCache&&"server"===i.source?s.reject(new yf(_f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new Jy(n,r,{includeMetadataChanges:!0,Z_:!0});return Hy(e,o)}(await Rv(e),e.asyncQueue,t,n,i))),i.promise
/**
             * @license
             * Copyright 2023 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */}(n,e._query).then((n=>new Lw(t,i,e,n)))},r:function(e,t){return(e=G(e))._checkNotDeleted("ref"),void 0!==t?Nc(e._root,t):e._root},s:async function(e,t,n){const i=Ft(e);!function(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&Ve(e,"argument-error"),je(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,Wt);const s=bn(i,n);return new Rn(i,"signInViaPopup",t,s).executeNotNull()},t:function(e,t="asc"){const n=t,i=yw("orderBy",e);return bw._create(i,n)},u:function(...e){return Ew._create("startAfter",e,!1)},v:function(e){return function(e,t){if(t<=0)throw new yf(_f.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */("limit",e),Cw._create("limit",e,"F")},w:function(e,t,n){const i=t,s=yw("where",e);return Tw._create(s,i,n)},x:function(e,t,...n){let i=[];t instanceof vw&&i.push(t),i=i.concat(n),function(e){const t=e.filter((e=>e instanceof Iw)).length,n=e.filter((e=>e instanceof Tw)).length;if(t>1||t>0&&n>0)throw new yf(_f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(i);for(const s of i)e=s._apply(e);return e}});var t={};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const s=!1,r="${JSCORE_VERSION}",o=function(e,t){if(!e)throw a(t)},a=function(e){return new Error("Firebase Database ("+r+") INTERNAL ASSERT FAILED: "+e)},c=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const t=e[s],r=s+1<e.length,o=r?e[s+1]:0,a=s+2<e.length,c=a?e[s+2]:0,h=t>>2,l=(3&t)<<4|o>>4;let u=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(u=64)),i.push(n[h],n[l],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(c(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],r=s<e.length?n[e.charAt(s)]:0;++s;const o=s<e.length?n[e.charAt(s)]:64;++s;const a=s<e.length?n[e.charAt(s)]:64;if(++s,null==t||null==r||null==o||null==a)throw new l;const c=t<<2|r>>4;if(i.push(c),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(e){const t=c(e);return h.encodeByteArray(t,!0)},d=function(e){return u(e).replace(/\./g,"")},f=function(e){try{return h.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function p(e){return g(void 0,e)}function g(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=g(e[n],t[n]));return e}
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const m=()=>
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,_=()=>{try{return m()||(()=>{if("undefined"==typeof process||void 0===t)return;const e=t.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&f(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},y=e=>{var t,n;return null===(n=null===(t=_())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},v=e=>{const t=y(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},w=()=>{var e;return null===(e=_())||void 0===e?void 0:e.config},T=e=>{var t;return null===(t=_())||void 0===t?void 0:t[`_${e}`]};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function b(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[d(JSON.stringify({alg:"none",type:"JWT"})),d(JSON.stringify(r)),""].join(".")}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function C(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function E(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(C())}function S(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function k(){return!0===s}function N(){return!function(){var e;const t=null===(e=_())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(n){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function A(){try{return"object"==typeof indexedDB}catch(e){return!1}}class R extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(P,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new R(i,o,n)}}const P=/\{\$([^}]+)}/g;
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function x(e){return JSON.parse(e)}function O(e){return JSON.stringify(e)}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const L=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=x(f(r[0])||""),n=x(f(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch(r){}return{header:t,claims:n,data:i,signature:s}};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function M(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function F(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function U(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function V(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function q(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(j(n)&&j(r)){if(!q(n,r))return!1}else if(n!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function j(e){return null!==e&&"object"==typeof e}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function B(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class z{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let l=0;l<16;l++)n[l]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let l=0;l<16;l++)n[l]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let l=16;l<80;l++){const e=n[l-3]^n[l-8]^n[l-14]^n[l-16];n[l]=4294967295&(e<<1|e>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],h=this.chain_[4];for(let l=0;l<80;l++){l<40?l<20?(i=c^o&(a^c),s=1518500249):(i=o^a^c,s=1859775393):l<60?(i=o&a|c&(o|a),s=2400959708):(i=o^a^c,s=3395469782);const e=(r<<5|r>>>27)+i+h+s+n[l]&4294967295;h=c,c=a,a=4294967295&(o<<30|o>>>2),o=r,r=e}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}class ${constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=W),void 0===i.error&&(i.error=W),void 0===i.complete&&(i.complete=W);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function W(){}function H(e,t){return`${e} failed: ${t} argument `}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const K=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function G(e){return e&&e._delegate?e._delegate:e}class Q{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Y="[DEFAULT]";
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class J{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new I;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e))try{this.getOrInitializeService({instanceIdentifier:Y})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=Y){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Y){return this.instances.has(e)}getOptions(e=Y){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,r]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(s)&&r.resolve(i);return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===Y?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(s){}var i;return n||null}normalizeInstanceIdentifier(e=Y){return this.component?this.component.multipleInstances?e:Y:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class X{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new J(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */var Z;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Z||(Z={}));const ee={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},te=Z.INFO,ne={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},ie=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=ne[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class se{constructor(e){this.name=e,this._logLevel=te,this._logHandler=ie,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ee[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class re{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const oe="@firebase/app",ae="0.9.27",ce=new se("@firebase/app"),he="[DEFAULT]",le={[oe]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ue=new Map,de=new Map;function fe(e,t){try{e.container.addComponent(t)}catch(n){ce.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function pe(e){const t=e.name;if(de.has(t))return ce.debug(`There were multiple attempts to register component ${t}.`),!1;de.set(t,e);for(const n of ue.values())fe(n,e);return!0}function ge(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const me=new D("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class _e{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Q("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const ye="10.8.0";function ve(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});const i=Object.assign({name:he,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw me.create("bad-app-name",{appName:String(s)});if(n||(n=w()),!n)throw me.create("no-options");const r=ue.get(s);if(r){if(q(n,r.options)&&q(i,r.config))return r;throw me.create("duplicate-app",{appName:s})}const o=new X(s);for(const c of de.values())o.addComponent(c);const a=new _e(n,i,o);return ue.set(s,a),a}function we(e=he){const t=ue.get(e);if(!t&&e===he&&w())return ve();if(!t)throw me.create("no-app",{appName:e});return t}function Te(e,t,n){var i;let s=null!==(i=le[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ce.warn(e.join(" "))}pe(new Q(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Ie="firebase-heartbeat-database",be=1,Ce="firebase-heartbeat-store";let Ee=null;function Se(){return Ee||(Ee=n(Ie,be,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Ce)}catch(n){console.warn(n)}}}).catch((e=>{throw me.create("idb-open",{originalErrorMessage:e.message})}))),Ee}async function ke(e,t){try{const n=(await Se()).transaction(Ce,"readwrite"),i=n.objectStore(Ce);await i.put(t,Ne(e)),await n.done}catch(n){if(n instanceof R)ce.warn(n.message);else{const e=me.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});ce.warn(e.message)}}}function Ne(e){return`${e.name}!${e.options.appId}`}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Ae{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new De(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Re();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==i&&!this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Re(),{heartbeatsToSend:n,unsentEntries:i}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),Pe(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Pe(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),s=d(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Re(){return(new Date).toISOString().substring(0,10)}class De{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!A()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(xi){t(xi)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Se()).transaction(Ce),n=await t.objectStore(Ce).get(Ne(e));return await t.done,n}catch(t){if(t instanceof R)ce.warn(t.message);else{const e=me.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});ce.warn(e.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Pe(e){return d(JSON.stringify({version:2,heartbeats:e})).length}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */var xe;function Oe(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}xe="",pe(new Q("platform-logger",(e=>new re(e)),"PRIVATE")),pe(new Q("heartbeat",(e=>new Ae(e)),"PRIVATE")),Te(oe,ae,xe),Te(oe,ae,"esm2017"),Te("fire-js","");const Le=Oe,Me=new D("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Fe=new se("@firebase/auth");function Ue(e,...t){Fe.logLevel<=Z.ERROR&&Fe.error(`Auth (${ye}): ${e}`,...t)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Ve(e,...t){throw Be(e,...t)}function qe(e,...t){return Be(e,...t)}function je(e,t,n){const i=Object.assign(Object.assign({},Le()),{[t]:n});return new D("auth","Firebase",i).create(t,{appName:e.name})}function Be(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Me.create(e,...t)}function ze(e,t,...n){if(!e)throw Be(t,...n)}function $e(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ue(t),new Error(t)}function We(e,t){e||$e(t)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function He(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ke(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Ge(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Ke()&&"https:"!==Ke()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Qe{constructor(e,t){this.shortDelay=e,this.longDelay=t,We(t>e,"Short delay should be less than long delay!"),this.isMobile=E()||S()}get(){return Ge()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Ye(e,t){We(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Je{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void $e("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void $e("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void $e("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Xe={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Ze=new Qe(3e4,6e4);
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function et(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function tt(e,t,n,i,s={}){return nt(e,s,(async()=>{let s={},r={};i&&("GET"===t?r=i:s={body:JSON.stringify(i)});const o=B(Object.assign({key:e.config.apiKey},r)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Je.fetch()(it(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function nt(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Xe),t);try{const t=new st(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw rt(e,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const t=s.ok?r.errorMessage:r.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw rt(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw rt(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw rt(e,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw je(e,a,o);Ve(e,a)}}catch(s){if(s instanceof R)throw s;Ve(e,"network-request-failed",{message:String(s)})}}function it(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?Ye(e.config,s):`${e.config.apiScheme}://${s}`}class st{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(qe(this.auth,"network-request-failed"))),Ze.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function rt(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=qe(e,t,i);return s.customData._tokenResponse=n,s}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function ot(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function at(e){return 1e3*Number(e)}function ct(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return Ue("JWT malformed, contained fewer than 3 sections"),null;try{const e=f(n);return e?JSON.parse(e):(Ue("Failed to decode base64 JWT payload"),null)}catch(s){return Ue("Caught error parsing JWT payload as JSON",null==s?void 0:s.toString()),null}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
async function ht(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof R&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}class lt{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class ut{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ot(this.lastLoginAt),this.creationTime=ot(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */async function dt(e){var t;const n=e.auth,s=await e.getIdToken(),r=await ht(e,async function(e,t){return tt(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:s}));ze(null==r?void 0:r.users.length,n,"internal-error");const o=r.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=i(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[],c=(h=e.providerData,l=a,[...h.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var h,l;const u=e.isAnonymous,d=!(e.email&&o.passwordHash||(null==c?void 0:c.length)),f=!!u&&d,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new ut(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,p)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class ft{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ze(e.idToken,"internal-error"),ze(void 0!==e.idToken,"internal-error"),ze(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=ct(e);return ze(t,"internal-error"),ze(void 0!==t.exp,"internal-error"),ze(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ze(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */await async function(e,t){const n=await nt(e,{},(async()=>{const n=B({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,r=it(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Je.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,r=new ft;return n&&(ze("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&(ze("string"==typeof i,"internal-error",{appName:e}),r.accessToken=i),s&&(ze("number"==typeof s,"internal-error",{appName:e}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ft,this.toJSON())}_performRefresh(){return $e("not implemented")}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function pt(e,t){ze("string"==typeof e||void 0===e,"internal-error",{appName:t})}class gt{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,r=i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ut(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ht(this,this.stsTokenManager.getToken(this.auth,e));return ze(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=G(e),i=await n.getIdToken(t),s=ct(i);ze(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:ot(at(s.auth_time)),issuedAtTime:ot(at(s.iat)),expirationTime:ot(at(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=G(e);await dt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(ze(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ze(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await dt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ht(this,async function(e,t){return tt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,r,o,a,c,h;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(r=t.photoURL)&&void 0!==r?r:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,_=null!==(h=t.lastLoginAt)&&void 0!==h?h:void 0,{uid:y,emailVerified:v,isAnonymous:w,providerData:T,stsTokenManager:I}=t;ze(y&&I,e,"internal-error");const b=ft.fromJSON(this.name,I);ze("string"==typeof y,e,"internal-error"),pt(l,e.name),pt(u,e.name),ze("boolean"==typeof v,e,"internal-error"),ze("boolean"==typeof w,e,"internal-error"),pt(d,e.name),pt(f,e.name),pt(p,e.name),pt(g,e.name),pt(m,e.name),pt(_,e.name);const C=new gt({uid:y,auth:e,email:u,emailVerified:v,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:b,createdAt:m,lastLoginAt:_});return T&&Array.isArray(T)&&(C.providerData=T.map((e=>Object.assign({},e)))),g&&(C._redirectEventId=g),C}static async _fromIdTokenResponse(e,t,n=!1){const i=new ft;i.updateFromServerResponse(t);const s=new gt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await dt(s),s}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const mt=new Map;function _t(e){We(e instanceof Function,"Expected a class definition");let t=mt.get(e);return t?(We(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,mt.set(e,t),t)}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class yt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yt.type="NONE";const vt=yt;
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function wt(e,t,n){return`firebase:${e}:${t}:${n}`}class Tt{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=wt(this.userKey,i.apiKey,s),this.fullPersistenceKey=wt("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Tt(_t(vt),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=i[0]||_t(vt);const r=wt(n,e.config.apiKey,e.name);let o=null;for(const h of t)try{const t=await h._get(r);if(t){const n=gt._fromJSON(e,t);h!==s&&(o=n),s=h;break}}catch(c){}const a=i.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(r)}catch(c){}}))),new Tt(s,e,n)):new Tt(s,e,n)}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function It(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(St(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(bt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Nt(t))return"Blackberry";if(At(t))return"Webos";if(Ct(t))return"Safari";if((t.includes("chrome/")||Et(t))&&!t.includes("edge/"))return"Chrome";if(kt(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function bt(e=C()){return/firefox\//i.test(e)}function Ct(e=C()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Et(e=C()){return/crios\//i.test(e)}function St(e=C()){return/iemobile/i.test(e)}function kt(e=C()){return/android/i.test(e)}function Nt(e=C()){return/blackberry/i.test(e)}function At(e=C()){return/webos/i.test(e)}function Rt(e=C()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Dt(){return function(){const e=C();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Pt(e=C()){return Rt(e)||kt(e)||At(e)||Nt(e)||/windows phone/i.test(e)||St(e)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function xt(e,t=[]){let n;switch(e){case"Browser":n=It(C());break;case"Worker":n=`${It(C())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ye}/${i}`}
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Ot{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(s){i(s)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==n?void 0:n.message})}}}
/**
             * @license
             * Copyright 2023 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Lt{constructor(e){var t,n,i,s;const r=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=r.minPasswordLength)&&void 0!==t?t:6,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),void 0!==r.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),void 0!==r.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),void 0!==r.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),void 0!==r.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(s=e.forceUpgradeOnSignin)&&void 0!==s&&s,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,r,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsLowercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsUppercaseLetter)||void 0===s||s),a.isValid&&(a.isValid=null===(r=a.containsNumericCharacter)||void 0===r||r),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Mt{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ut(this),this.idTokenSubscription=new Ut(this),this.beforeStateQueue=new Ot(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Me,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_t(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Tt.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(r){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(r)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ze(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await dt(e)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?G(e):null;return t&&ze(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ze(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_t(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return tt(e,"GET","/v2/passwordPolicy",et(e,t))}
/**
             * @license
             * Copyright 2023 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(this),t=new Lt(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new D("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return tt(e,"POST","/v2/accounts:revokeToken",et(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_t(e)||this._popupRedirectResolver;ze(t,this,"argument-error"),this.redirectPersistenceManager=await Tt.create(this,[_t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t);let r=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(ze(o,this,"internal-error"),o.then((()=>{r||s(this.currentUser)})),"function"==typeof t){const s=e.addObserver(t,n,i);return()=>{r=!0,s()}}{const n=e.addObserver(t);return()=>{r=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ze(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Fe.logLevel<=Z.WARN&&Fe.warn(`Auth (${ye}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function Ft(e){return G(e)}class Ut{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new $(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return ze(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */let Vt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qt(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function jt(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Bt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return $e("not implemented")}_getIdTokenResponse(e){return $e("not implemented")}_linkToIdToken(e,t){return $e("not implemented")}_getReauthenticationResolver(e){return $e("not implemented")}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */async function zt(e,t){return async function(e,t,n,i,s={}){const r=await tt(e,t,n,i,s);return"mfaPendingCredential"in r&&Ve(e,"multi-factor-auth-required",{_serverResponse:r}),r}(e,"POST","/v1/accounts:signInWithIdp",et(e,t))}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class $t extends Bt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ve("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,r=i(t,["providerId","signInMethod"]);if(!n||!s)return null;const o=new $t(n,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){return zt(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,zt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zt(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=B(t)}return e}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Wt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Ht extends Wt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Kt extends Ht{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch(t){return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Kt.PROVIDER_ID="facebook.com";
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Gt extends Ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $t._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Gt.credential(t,n)}catch(i){return null}}}e("G",Gt),Gt.GOOGLE_SIGN_IN_METHOD="google.com",Gt.PROVIDER_ID="google.com";
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Qt extends Ht{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch(t){return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com",Qt.PROVIDER_ID="github.com";
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Yt extends Ht{constructor(){super("twitter.com")}static credential(e,t){return $t._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Yt.credential(t,n)}catch(i){return null}}}Yt.TWITTER_SIGN_IN_METHOD="twitter.com",Yt.PROVIDER_ID="twitter.com";
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await gt._fromIdTokenResponse(e,n,i),r=Xt(n);return new Jt({user:s,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Xt(n);return new Jt({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Xt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Zt extends R{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Zt.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Zt(e,t,n,i)}}function en(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Zt._fromErrorAndOperation(e,n,t,i);throw n}))}const tn="__sak";
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class nn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(tn,"1"),this.storage.removeItem(tn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class sn extends nn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=C();return Ct(e)||Rt(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Pt(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);Dt()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sn.type="LOCAL";const rn=sn;
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class on extends nn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}on.type="SESSION";const an=on;
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class cn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new cn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function hn(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */cn.receivers=[];class ln{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const c=hn("",20);i.port1.start();const h=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(h),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(h),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function un(){return window}
/**
             * @license
             * Copyright 2020 Google LLC.
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function dn(){return void 0!==un().WorkerGlobalScope&&"function"==typeof un().importScripts}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const fn="firebaseLocalStorageDb",pn="firebaseLocalStorage",gn="fbase_key";class mn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function _n(e,t){return e.transaction([pn],t?"readwrite":"readonly").objectStore(pn)}function yn(){const e=indexedDB.open(fn,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(pn,{keyPath:gn})}catch(i){n(i)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(pn)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(fn);return new mn(e).toPromise()}(),t(await yn()))}))}))}async function vn(e,t,n){const i=_n(e,!0).put({[gn]:t,value:n});return new mn(i).toPromise()}function wn(e,t){const n=_n(e,!0).delete(t);return new mn(n).toPromise()}class Tn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await yn()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cn._getInstance(dn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ln(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yn();return await vn(e,tn,"1"),await wn(e,tn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>vn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=_n(e,!1).get(t),i=await new mn(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>wn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=_n(e,!1).getAll();return new mn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Tn.type="LOCAL";const In=Tn;
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function bn(e,t){return t?_t(t):(ze(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */new Qe(3e4,6e4);class Cn extends Bt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function En(e){
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */return async function(e,t,n=!1){const i="signIn",s=await en(e,i,t),r=await Jt._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}(e.auth,new Cn(e),e.bypassAuthState)}function Sn(e){const{auth:t,user:n}=e;return ze(n,t,"internal-error"),
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
async function(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await ht(e,en(i,s,t,e),n);ze(r.idToken,i,"internal-error");const o=ct(r.idToken);ze(o,i,"internal-error");const{sub:a}=o;return ze(e.uid===a,i,"user-mismatch"),Jt._forOperation(e,s,r)}catch(r){throw"auth/user-not-found"===(null==r?void 0:r.code)&&Ve(i,"user-mismatch"),r}}(n,new Cn(e),e.bypassAuthState)}async function kn(e){const{auth:t,user:n}=e;return ze(n,t,"internal-error"),async function(e,t,n=!1){const i=await ht(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Jt._forOperation(e,"link",i)}(n,new Cn(e),e.bypassAuthState)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Nn{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return En;case"linkViaPopup":case"linkViaRedirect":return kn;case"reauthViaPopup":case"reauthViaRedirect":return Sn;default:Ve(this.auth,"internal-error")}}resolve(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const An=new Qe(2e3,1e4);class Rn extends Nn{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Rn.currentPopupAction&&Rn.currentPopupAction.cancel(),Rn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ze(e,this.auth,"internal-error"),e}async onExecution(){We(1===this.filter.length,"Popup operations only handle one event");const e=hn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(qe(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,An.get())};e()}}Rn.currentPopupAction=null;
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const Dn="pendingRedirect",Pn=new Map;class xn extends Nn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Pn.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return wt(Dn,e.config.apiKey,e.name)}(t),i=function(e){return _t(e._redirectPersistence)}(e);if(!(await i._isAvailable()))return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Pn.set(this.auth._key(),e)}return this.bypassAuthState||Pn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function On(e,t){Pn.set(e._key(),t)}async function Ln(e,t,n=!1){const i=Ft(e),s=bn(i,t),r=new xn(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Mn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Un(e);default:return!1}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Un(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(qe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fn(e))}saveEventToCache(e){this.cachedEventUids.add(Fn(e)),this.lastProcessedEventTime=Date.now()}}function Fn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Un({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const Vn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qn=/^https?/;async function jn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return tt(e,"GET","/v1/projects",t)}(e);for(const i of t)try{if(Bn(i))return}catch(n){}Ve(e,"unauthorized-domain")}function Bn(e){const t=He(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!qn.test(n))return!1;if(Vn.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
             * @license
             * Copyright 2020 Google LLC.
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const zn=new Qe(3e4,6e4);function $n(){const e=un().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Wn(e){return new Promise(((t,n)=>{var i,s,r,o;function a(){$n(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{$n(),n(qe(e,"network-request-failed"))},timeout:zn.get()})}if(null===(s=null===(i=un().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=un().gapi)||void 0===r?void 0:r.load)){const t=`__iframefcb${Math.floor(1e6*Math.random())}`;return un()[t]=()=>{gapi.load?a():n(qe(e,"network-request-failed"))},(o=`${Vt.gapiScript}?onload=${t}`,Vt.loadJS(o)).catch((e=>n(e)))}a()}})).catch((e=>{throw Hn=null,e}))}let Hn=null;
/**
             * @license
             * Copyright 2020 Google LLC.
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const Kn=new Qe(5e3,15e3),Gn="__/auth/iframe",Qn="emulator/auth/iframe",Yn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xn(e){const t=e.config;ze(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ye(t,Qn):`https://${e.config.authDomain}/${Gn}`,i={apiKey:t.apiKey,appName:e.name,v:ye},s=Jn.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${B(i).slice(1)}`}async function Zn(e){const t=await function(e){return Hn=Hn||Wn(e),Hn}(e),n=un().gapi;return ze(n,e,"internal-error"),t.open({where:document.body,url:Xn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yn,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const s=qe(e,"network-request-failed"),r=un().setTimeout((()=>{i(s)}),Kn.get());function o(){un().clearTimeout(r),n(t)}t.ping(o).then(o,(()=>{i(s)}))}))))}
/**
             * @license
             * Copyright 2020 Google LLC.
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const ei={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ti{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ni(e,t,n,i=500,s=600){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ei),{width:i.toString(),height:s.toString(),top:r,left:o}),h=C().toLowerCase();n&&(a=Et(h)?"_blank":n),bt(h)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=C()){var t;return Rt(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(t||"",a),new ti(null);const u=window.open(t||"",a,l);ze(u,e,"popup-blocked");try{u.focus()}catch(d){}return new ti(u)}const ii="__/auth/handler",si="emulator/auth/handler",ri=encodeURIComponent("fac");async function oi(e,t,n,i,s,r){ze(e.config.authDomain,e,"auth-domain-config-required"),ze(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:ye,eventId:s};if(t instanceof Wt){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",U(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(r||{}))o[e]=t}if(t instanceof Ht){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))void 0===a[l]&&delete a[l];const c=await e._getAppCheckToken(),h=c?`#${ri}=${encodeURIComponent(c)}`:"";return`${function({config:e}){return e.emulator?Ye(e,si):`https://${e.authDomain}/${ii}`}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e)}?${B(a).slice(1)}${h}`}const ai="webStorageSupport",ci=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=an,this._completeRedirectFn=Ln,this._overrideRedirectResult=On}async _openPopup(e,t,n,i){var s;return We(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),ni(e,await oi(e,t,n,He(),i),hn())}async _openRedirect(e,t,n,i){return await this._originValidation(e),function(e){un().location.href=e}(await oi(e,t,n,He(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(We(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Zn(e),n=new Mn(e);return t.register("authEvent",(t=>(ze(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:n.onEvent(t.authEvent)?"ACK":"ERROR"})),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ai,{type:ai},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[ai];void 0!==s&&t(!!s),Ve(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Pt()||Ct()||Rt()}};var hi="@firebase/auth",li="1.6.0";
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class ui{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ze(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const di=T("authIdTokenMaxAge")||300;let fi=null;const pi=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>di)return;const s=null==n?void 0:n.token;fi!==s&&(fi=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};var gi;!function(e){Vt=e}({loadJS:e=>new Promise(((t,n)=>{const i=document.createElement("script");var s,r;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=qe("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),gi="Browser",pe(new Q("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:r,authDomain:o}=n.options;ze(r&&!r.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:r,authDomain:o,clientPlatform:gi,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xt(gi)},c=new Mt(n,i,s,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(_t);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),pe(new Q("auth-internal",(e=>(e=>new ui(e))(Ft(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Te(hi,li,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(gi)),Te(hi,li,"esm2017"),
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
Te("firebase","10.8.0","app");var mi={};const _i="@firebase/database",yi="1.0.3";
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
let vi="";
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class wi{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),O(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:x(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Ti{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return M(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Ii=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new wi(t)}}catch(t){}return new Ti},bi=Ii("localStorage"),Ci=Ii("sessionStorage"),Ei=new se("@firebase/database"),Si=function(){let e=1;return function(){return e++}}(),ki=function(e){const t=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,o(i<e.length,"Surrogate pair missing trail surrogate."),s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t}(e),n=new z;n.update(t);const i=n.digest();return h.encodeByteArray(i)},Ni=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Ni.apply(null,i):t+="object"==typeof i?O(i):i,t+=" "}return t};let Ai=null,Ri=!0;const Di=function(...e){var t,n;if(!0===Ri&&(Ri=!1,null===Ai&&!0===Ci.get("logging_enabled")&&(t=!0,o(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(Ei.logLevel=Z.VERBOSE,Ai=Ei.log.bind(Ei),n&&Ci.set("logging_enabled",!0)):"function"==typeof t?Ai=t:(Ai=null,Ci.remove("logging_enabled")))),Ai){const t=Ni.apply(null,e);Ai(t)}},Pi=function(e){return function(...t){Di(e,...t)}},xi=function(...e){const t="FIREBASE INTERNAL ERROR: "+Ni(...e);Ei.error(t)},Oi=function(...e){const t=`FIREBASE FATAL ERROR: ${Ni(...e)}`;throw Ei.error(t),new Error(t)},Li=function(...e){const t="FIREBASE WARNING: "+Ni(...e);Ei.warn(t)},Mi=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Fi="[MIN_NAME]",Ui="[MAX_NAME]",Vi=function(e,t){if(e===t)return 0;if(e===Fi||t===Ui)return-1;if(t===Fi||e===Ui)return 1;{const n=Ki(e),i=Ki(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},qi=function(e,t){return e===t?0:e<t?-1:1},ji=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+O(t))},Bi=function(e){if("object"!=typeof e||null===e)return O(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=O(t[i]),n+=":",n+=Bi(e[t[i]]);return n+="}",n},zi=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function $i(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Wi=function(e){o(!Mi(e),"Invalid JSON number");const t=1023;let n,i,s,r,a;0===e?(i=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=r+t,s=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(e/Math.pow(2,-1074))));const c=[];for(a=52;a;a-=1)c.push(s%2?1:0),s=Math.floor(s/2);for(a=11;a;a-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(n?1:0),c.reverse();const h=c.join("");let l="";for(a=0;a<64;a+=8){let e=parseInt(h.substr(a,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()},Hi=new RegExp("^-?(0*)\\d{1,10}$"),Ki=function(e){if(Hi.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Gi=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw Li("Exception was thrown by user callback.",e),t}),Math.floor(0))}},Qi=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Yi{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Li(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Ji{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Di("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Li(e)}}class Xi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xi.OWNER="owner";
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const Zi=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,es="ac",ts="websocket",ns="long_polling";
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class is{constructor(e,t,n,i,s=!1,r="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=bi.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&bi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ss(e,t,n){let i;if(o("string"==typeof t,"typeof type must == string"),o("object"==typeof n,"typeof params must == object"),t===ts)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ns)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return $i(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class rs{constructor(){this.counters_={}}incrementCounter(e,t=1){M(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return p(this.counters_)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const os={},as={};function cs(e){const t=e.toString();return os[t]||(os[t]=new rs),os[t]}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class hs{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Gi((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const ls="start";class us{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Pi(e),this.stats_=cs(t),this.urlFn=e=>(this.appCheckToken&&(e[es]=this.appCheckToken),ss(t,ns,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new hs(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new ds(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ls)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ls]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[es]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Zi.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){us.forceAllow_=!0}static forceDisallow(){us.forceDisallow_=!0}static isAvailable(){return!!us.forceAllow_||!(us.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=O(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=u(t),i=zi(n,1840);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=O(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ds{constructor(e,t,n,i){this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Si(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=ds.createIFrame_();let n="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)&&(n='<script>document.domain="'+document.domain+'";<\/script>');const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(s){Di("frame writing exception"),s.stack&&Di(s.stack),Di(s)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Di("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+30+n.length<=1870;){const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Di("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */let fs=null;"undefined"!=typeof MozWebSocket?fs=MozWebSocket:"undefined"!=typeof WebSocket&&(fs=WebSocket);class ps{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Pi(this.connId),this.stats_=cs(t),this.connURL=ps.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){const r={v:"5"};return"undefined"!=typeof location&&location.hostname&&Zi.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r[es]=i),s&&(r.p=s),ss(e,ts,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,bi.set("previous_websocket_failure",!0);try{let e;k(),this.mySock=new fs(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){ps.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==fs&&!ps.forceDisallow_}static previouslyFailed(){return bi.isInMemoryStorage||!0===bi.get("previous_websocket_failure")}markConnectionHealthy(){bi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=x(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(o(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=O(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=zi(t,16384);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ps.responsesRequiredToBeHealthy=2,ps.healthyTimeout=3e4;
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class gs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[us,ps]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ps&&ps.isAvailable();let n=t&&!ps.previouslyFailed();if(e.webSocketOnly&&(t||Li("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ps];else{const e=this.transports_=[];for(const t of gs.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);gs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gs.globalTransportInitialized_=!1;class ms{constructor(e,t,n,i,s,r,o,a,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Pi("c:"+this.id+":"),this.transportManager_=new gs(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qi((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ji("t",e),n=ji("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ji("t",e),n=ji("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ji("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?xi("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Li("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Qi((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qi((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(bi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class _s{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class ys{constructor(e){this.allowedEvents_=e,this.listeners_={},o(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!n||n===i[s].context))return void i.splice(s,1)}validateEventType_(e){o(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class vs extends ys{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||E()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new vs}getInitialEvent(e){return o("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const ws=32,Ts=768;class Is{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function bs(){return new Is("")}function Cs(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Es(e){return e.pieces_.length-e.pieceNum_}function Ss(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Is(e.pieces_,t)}function ks(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Ns(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function As(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Is(t,0)}function Rs(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof Is)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Is(n,0)}function Ds(e){return e.pieceNum_>=e.pieces_.length}function Ps(e,t){const n=Cs(e),i=Cs(t);if(null===n)return t;if(n===i)return Ps(Ss(e),Ss(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function xs(e,t){if(Es(e)!==Es(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Os(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Es(e)>Es(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Ls{constructor(e,t){this.errorPrefix_=t,this.parts_=Ns(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=K(this.parts_[n]);Ms(this)}}function Ms(e){if(e.byteLength_>Ts)throw new Error(e.errorPrefix_+"has a key path longer than "+Ts+" bytes ("+e.byteLength_+").");if(e.parts_.length>ws)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ws+") or object contains a cycle "+Fs(e))}function Fs(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Us extends ys{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Us}getInitialEvent(e){return o("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Vs=1e3;class qs extends _s{constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=qs.nextPersistentConnectionId_++,this.log_=Pi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Vs,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!k())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Us.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&vs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(O(s)),o(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new I,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),o(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),o(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;qs.warnOnListenWarnings_(r,t),(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&M(e,"w")){const n=F(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Li(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||function(e){const t=L(e).claims;return"object"==typeof t&&!0===t.admin}(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){const t=L(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),o(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+O(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):xi("Unrecognized action received from server: "+O(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){o(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Vs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Vs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&((new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Vs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime());const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+qs.nextConnectionId_++,r=this.lastSessionId;let a=!1,c=null;const h=function(){c?c.close():(a=!0,i())},l=function(e){o(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(e)};this.realtime_={close:h,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[e,o]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);a?Di("getToken() completed but was canceled"):(Di("getToken() completed. Creating connection."),this.authToken_=e&&e.accessToken,this.appCheckToken_=o&&o.token,c=new ms(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,(e=>{Li(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),a||(this.repoInfo_.nodeAdmin&&Li(e),h())}}}interrupt(e){Di("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Di("Resuming connection for reason: "+e),delete this.interruptReasons_[e],U(this.interruptReasons_)&&(this.reconnectDelay_=Vs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Bi(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Is(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Di("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Di("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+vi.replace(/\./g,"-")]=1,E()?e["framework.cordova"]=1:S()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=vs.getInstance().currentlyOnline();return U(this.interruptReasons_)&&e}}qs.nextPersistentConnectionId_=0,qs.nextConnectionId_=0;
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class js{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new js(e,t)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Bs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new js(Fi,e),i=new js(Fi,t);return 0!==this.compare(n,i)}minPost(){return js.MIN}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */let zs;class $s extends Bs{static get __EMPTY_NODE(){return zs}static set __EMPTY_NODE(e){zs=e}compare(e,t){return Vi(e.name,t.name)}isDefinedOn(e){throw a("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return js.MIN}maxPost(){return new js(Ui,zs)}makePost(e,t){return o("string"==typeof e,"KeyIndex indexValue must always be a string."),new js(e,zs)}toString(){return".key"}}const Ws=new $s;
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */let Hs=class{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Ks=class e{constructor(t,n,i,s,r){this.key=t,this.value=n,this.color=null!=i?i:e.RED,this.left=null!=s?s:Qs.EMPTY_NODE,this.right=null!=r?r:Qs.EMPTY_NODE}copy(t,n,i,s,r){return new e(null!=t?t:this.key,null!=n?n:this.value,null!=i?i:this.color,null!=s?s:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qs.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Qs.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Ks.RED=!0,Ks.BLACK=!1;let Gs,Qs=class e{constructor(t,n=e.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new e(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Ks.BLACK,null,null))}remove(t){return new e(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Ks.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Hs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Hs(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Hs(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Hs(this.root_,null,this.comparator_,!0,e)}};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function Ys(e,t){return Vi(e.name,t.name)}function Js(e,t){return Vi(e,t)}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */Qs.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new Ks(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Xs=function(e){return"number"==typeof e?"number:"+Wi(e):"string:"+e},Zs=function(e){if(e.isLeafNode()){const t=e.val();o("string"==typeof t||"number"==typeof t||"object"==typeof t&&M(t,".sv"),"Priority must be a string or number.")}else o(e===Gs||e.isEmpty(),"priority of unexpected type.");o(e===Gs||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
let er,tr,nr;class ir{constructor(e,t=ir.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,o(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Zs(this.priorityNode_)}static set __childrenNodeConstructor(e){er=e}static get __childrenNodeConstructor(){return er}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ir(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:ir.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ds(e)?this:".priority"===Cs(e)?this.priorityNode_:ir.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:ir.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Cs(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(o(".priority"!==n||1===Es(e),".priority must be the last token in a path"),this.updateImmediateChild(n,ir.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ss(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xs(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Wi(this.value_):this.value_,this.lazyHash_=ki(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ir.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ir.__childrenNodeConstructor?-1:(o(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=ir.VALUE_TYPE_ORDER.indexOf(t),s=ir.VALUE_TYPE_ORDER.indexOf(n);return o(i>=0,"Unknown leaf type: "+t),o(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}ir.VALUE_TYPE_ORDER=["object","boolean","number","string"];const sr=new class extends Bs{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?Vi(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return js.MIN}maxPost(){return new js(Ui,new ir("[PRIORITY-POST]",nr))}makePost(e,t){const n=tr(e);return new js(t,new ir("[PRIORITY-POST]",n))}toString(){return".priority"}},rr=Math.log(2);
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class or{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/rr,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ar=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new Ks(a,o.node,Ks.BLACK,null,null);{const c=parseInt(r/2,10)+t,h=s(t,c),l=s(c+1,i);return o=e[c],a=n?n(o):o,new Ks(a,o.node,Ks.BLACK,h,l)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const h=s(r+1,a),l=e[r],u=n?n(l):l;c(new Ks(u,l.node,i,null,h))},c=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Ks.BLACK):(a(i,Ks.BLACK),a(i,Ks.RED))}return r}(new or(e.length));return new Qs(i||t,r)};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */let cr;const hr={};class lr{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return o(hr&&sr,"ChildrenNode.ts has not been loaded"),cr=cr||new lr({".priority":hr},{".priority":sr}),cr}get(e){const t=F(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Qs?t:null}hasIndex(e){return M(this.indexSet_,e.toString())}addIndex(e,t){o(e!==Ws,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(js.Wrap);let r,a=s.getNext();for(;a;)i=i||e.isDefinedOn(a.node),n.push(a),a=s.getNext();r=i?ar(n,e.getCompare()):hr;const c=e.toString(),h=Object.assign({},this.indexSet_);h[c]=e;const l=Object.assign({},this.indexes_);return l[c]=r,new lr(l,h)}addToIndexes(e,t){const n=V(this.indexes_,((n,i)=>{const s=F(this.indexSet_,i);if(o(s,"Missing index implementation for "+i),n===hr){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(js.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),ar(n,s.getCompare())}return hr}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new js(e.name,i))),s.insert(e,e.node)}}));return new lr(n,this.indexSet_)}removeFromIndexes(e,t){const n=V(this.indexes_,(n=>{if(n===hr)return n;{const i=t.get(e.name);return i?n.remove(new js(e.name,i)):n}}));return new lr(n,this.indexSet_)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */let ur;class dr{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Zs(this.priorityNode_),this.children_.isEmpty()&&o(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ur||(ur=new dr(new Qs(Js),null,lr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ur}updatePriority(e){return this.children_.isEmpty()?this:new dr(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?ur:t}}getChild(e){const t=Cs(e);return null===t?this:this.getImmediateChild(t).getChild(Ss(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(o(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new js(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?ur:this.priorityNode_;return new dr(i,r,s)}}updateChild(e,t){const n=Cs(e);if(null===n)return t;{o(".priority"!==Cs(e)||1===Es(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Ss(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(sr,((r,o)=>{t[r]=o.val(e),n++,s&&dr.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xs(this.getPriority().val())+":"),this.forEachChild(sr,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":ki(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new js(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new js(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new js(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,js.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,js.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===fr?-1:0}withIndex(e){if(e===Ws||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new dr(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ws||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(sr),n=t.getIterator(sr);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===Ws?null:this.indexMap_.get(e.toString())}}dr.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const fr=new class extends dr{constructor(){super(new Qs(Js),dr.EMPTY_NODE,lr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return dr.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(js,{MIN:{value:new js(Fi,dr.EMPTY_NODE)},MAX:{value:new js(Ui,fr)}}),$s.__EMPTY_NODE=dr.EMPTY_NODE,ir.__childrenNodeConstructor=dr,Gs=fr,function(e){nr=e}(fr);
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const pr=!0;function gr(e,t=null){if(null===e)return dr.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),o(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e)return new ir(e,gr(t));if(e instanceof Array||!pr){let n=dr.EMPTY_NODE;return $i(e,((t,i)=>{if(M(e,t)&&"."!==t.substring(0,1)){const e=gr(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(gr(t))}{const n=[];let i=!1;if($i(e,((e,t)=>{if("."!==e.substring(0,1)){const s=gr(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new js(e,s)))}})),0===n.length)return dr.EMPTY_NODE;const s=ar(n,Ys,(e=>e.name),Js);if(i){const e=ar(n,sr.getCompare());return new dr(s,gr(t),new lr({".priority":e},{".priority":sr}))}return new dr(s,gr(t),lr.Default)}}!function(e){tr=e}(gr);
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class mr extends Bs{constructor(e){super(),this.indexPath_=e,o(!Ds(e)&&".priority"!==Cs(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?Vi(e.name,t.name):s}makePost(e,t){const n=gr(e),i=dr.EMPTY_NODE.updateChild(this.indexPath_,n);return new js(t,i)}maxPost(){const e=dr.EMPTY_NODE.updateChild(this.indexPath_,fr);return new js(Ui,e)}toString(){return Ns(this.indexPath_,0).join("/")}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const _r=new class extends Bs{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Vi(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return js.MIN}maxPost(){return js.MAX}makePost(e,t){const n=gr(e);return new js(t,n)}toString(){return".value"}};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function yr(e){return{type:"value",snapshotNode:e}}function vr(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function wr(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Tr(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Ir{constructor(e){this.index_=e}updateChild(e,t,n,i,s,r){o(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=r&&(n.isEmpty()?e.hasChild(t)?r.trackChildChange(wr(t,a)):o(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?r.trackChildChange(vr(t,n)):r.trackChildChange(Tr(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(sr,((e,i)=>{t.hasChild(e)||n.trackChildChange(wr(e,i))})),t.isLeafNode()||t.forEachChild(sr,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(Tr(t,i,s))}else n.trackChildChange(vr(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?dr.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class br{constructor(e){this.indexedFilter_=new Ir(e.getIndex()),this.index_=e.getIndex(),this.startPost_=br.getStartPost_(e),this.endPost_=br.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,s,r){return this.matches(new js(t,n))||(n=dr.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=dr.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(dr.EMPTY_NODE);const s=this;return t.forEachChild(sr,((e,t)=>{s.matches(new js(e,t))||(i=i.updateImmediateChild(e,dr.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Cr{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new br(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new js(t,n))||(n=dr.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=dr.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=dr.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(dr.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,dr.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let r;if(this.reverse_){const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else r=this.index_.getCompare();const a=e;o(a.numChildren()===this.limit_,"");const c=new js(t,n),h=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),l=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=i.getChildAfterChild(this.index_,h,this.reverse_);for(;null!=o&&(o.name===t||a.hasChild(o.name));)o=i.getChildAfterChild(this.index_,o,this.reverse_);const u=null==o?1:r(o,c);if(l&&!n.isEmpty()&&u>=0)return null!=s&&s.trackChildChange(Tr(t,n,e)),a.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(wr(t,e));const n=a.updateImmediateChild(t,dr.EMPTY_NODE);return null!=o&&this.rangedFilter_.matches(o)?(null!=s&&s.trackChildChange(vr(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:l&&r(h,c)>=0?(null!=s&&(s.trackChildChange(wr(h.name,h.node)),s.trackChildChange(vr(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(h.name,dr.EMPTY_NODE)):e}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Er{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=sr}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return o(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return o(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Fi}hasEnd(){return this.endSet_}getIndexEndValue(){return o(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return o(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ui}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return o(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===sr}copy(){const e=new Er;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Sr(e){const t={};if(e.isDefault())return t;let n;if(e.index_===sr?n="$priority":e.index_===_r?n="$value":e.index_===Ws?n="$key":(o(e.index_ instanceof mr,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=O(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=O(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+O(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=O(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+O(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function kr(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==sr&&(t.i=e.index_.toString()),t}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Nr extends _s{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=Pi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(o(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=Nr.getListenId_(e,n),o={};this.listens_[r]=o;const a=Sr(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),F(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Nr.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Sr(e._queryParams),n=e._path.toString(),i=new I;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+B(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=x(o.responseText)}catch(e){Li("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&Li("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Ar{constructor(){this.rootNode_=dr.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Rr(){return{value:null,children:new Map}}function Dr(e,t,n){if(Ds(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Cs(t);e.children.has(i)||e.children.set(i,Rr()),Dr(e.children.get(i),t=Ss(t),n)}}function Pr(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e,((e,i)=>{Pr(i,new Is(t.toString()+"/"+e),n)}))}class xr{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&$i(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Or{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new xr(e);const n=1e4+2e4*Math.random();Qi(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;$i(e,((e,i)=>{i>0&&M(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Qi(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */var Lr,Mr;function Fr(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(Mr=Lr||(Lr={}))[Mr.OVERWRITE=0]="OVERWRITE",Mr[Mr.MERGE=1]="MERGE",Mr[Mr.ACK_USER_WRITE=2]="ACK_USER_WRITE",Mr[Mr.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Ur{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Lr.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Ds(this.path)){if(null!=this.affectedTree.value)return o(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Is(e));return new Ur(bs(),t,this.revert)}}return o(Cs(this.path)===e,"operationForChild called for unrelated child."),new Ur(Ss(this.path),this.affectedTree,this.revert)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Vr{constructor(e,t){this.source=e,this.path=t,this.type=Lr.LISTEN_COMPLETE}operationForChild(e){return Ds(this.path)?new Vr(this.source,bs()):new Vr(this.source,Ss(this.path))}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class qr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Lr.OVERWRITE}operationForChild(e){return Ds(this.path)?new qr(this.source,bs(),this.snap.getImmediateChild(e)):new qr(this.source,Ss(this.path),this.snap)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class jr{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Lr.MERGE}operationForChild(e){if(Ds(this.path)){const t=this.children.subtree(new Is(e));return t.isEmpty()?null:t.value?new qr(this.source,bs(),t.value):new jr(this.source,bs(),t)}return o(Cs(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new jr(this.source,Ss(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Br{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ds(e))return this.isFullyInitialized()&&!this.filtered_;const t=Cs(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class zr{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $r(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw a("Should only compare child_ events.");const i=new js(t.childName,t.snapshotNode),s=new js(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function Wr(e,t){return{eventCache:e,serverCache:t}}function Hr(e,t,n,i){return Wr(new Br(t,n,i),e.serverCache)}function Kr(e,t,n,i){return Wr(e.eventCache,new Br(t,n,i))}function Gr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Qr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */let Yr;class Jr{constructor(e,t=(()=>(Yr||(Yr=new Qs(qi)),Yr))()){this.value=e,this.children=t}static fromObject(e){let t=new Jr(null);return $i(e,((e,n)=>{t=t.set(new Is(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:bs(),value:this.value};if(Ds(e))return null;{const n=Cs(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(Ss(e),t);return null!=s?{path:Rs(new Is(n),s.path),value:s.value}:null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Ds(e))return this;{const t=Cs(e),n=this.children.get(t);return null!==n?n.subtree(Ss(e)):new Jr(null)}}set(e,t){if(Ds(e))return new Jr(t,this.children);{const n=Cs(e),i=(this.children.get(n)||new Jr(null)).set(Ss(e),t),s=this.children.insert(n,i);return new Jr(this.value,s)}}remove(e){if(Ds(e))return this.children.isEmpty()?new Jr(null):new Jr(null,this.children);{const t=Cs(e),n=this.children.get(t);if(n){const i=n.remove(Ss(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new Jr(null):new Jr(this.value,s)}return this}}get(e){if(Ds(e))return this.value;{const t=Cs(e),n=this.children.get(t);return n?n.get(Ss(e)):null}}setTree(e,t){if(Ds(e))return t;{const n=Cs(e),i=(this.children.get(n)||new Jr(null)).setTree(Ss(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Jr(this.value,s)}}fold(e){return this.fold_(bs(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(Rs(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,bs(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Ds(e))return null;{const i=Cs(e),s=this.children.get(i);return s?s.findOnPath_(Ss(e),Rs(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,bs(),t)}foreachOnPath_(e,t,n){if(Ds(e))return this;{this.value&&n(t,this.value);const i=Cs(e),s=this.children.get(i);return s?s.foreachOnPath_(Ss(e),Rs(t,i),n):new Jr(null)}}foreach(e){this.foreach_(bs(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Rs(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Xr{constructor(e){this.writeTree_=e}static empty(){return new Xr(new Jr(null))}}function Zr(e,t,n){if(Ds(t))return new Xr(new Jr(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=Ps(s,t);return r=r.updateChild(o,n),new Xr(e.writeTree_.set(s,r))}{const i=new Jr(n),s=e.writeTree_.setTree(t,i);return new Xr(s)}}}function eo(e,t,n){let i=e;return $i(n,((e,n)=>{i=Zr(i,Rs(t,e),n)})),i}function to(e,t){if(Ds(t))return Xr.empty();{const n=e.writeTree_.setTree(t,new Jr(null));return new Xr(n)}}function no(e,t){return null!=io(e,t)}function io(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ps(n.path,t)):null}function so(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(sr,((e,n)=>{t.push(new js(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new js(e,n.value))})),t}function ro(e,t){if(Ds(t))return e;{const n=io(e,t);return new Xr(null!=n?new Jr(n):e.writeTree_.subtree(t))}}function oo(e){return e.writeTree_.isEmpty()}function ao(e,t){return co(bs(),e.writeTree_,t)}function co(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?(o(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=co(Rs(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Rs(e,".priority"),i)),n}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function ho(e,t){return bo(t,e)}function lo(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));o(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,a=e.allWrites.length-1;for(;s&&a>=0;){const t=e.allWrites[a];t.visible&&(a>=n&&uo(t,i.path)?s=!1:Os(i.path,t.path)&&(r=!0)),a--}return!!s&&(r?(function(e){e.visibleWrites=po(e.allWrites,fo,bs()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0):(i.snap?e.visibleWrites=to(e.visibleWrites,i.path):$i(i.children,(t=>{e.visibleWrites=to(e.visibleWrites,Rs(i.path,t))})),!0))}function uo(e,t){if(e.snap)return Os(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Os(Rs(e.path,n),t))return!0;return!1}function fo(e){return e.visible}function po(e,t,n){let i=Xr.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)Os(n,e)?(t=Ps(n,e),i=Zr(i,t,r.snap)):Os(e,n)&&(t=Ps(e,n),i=Zr(i,bs(),r.snap.getChild(t)));else{if(!r.children)throw a("WriteRecord should have .snap or .children");if(Os(n,e))t=Ps(n,e),i=eo(i,t,r.children);else if(Os(e,n))if(t=Ps(e,n),Ds(t))i=eo(i,bs(),r.children);else{const e=F(r.children,Cs(t));if(e){const n=e.getChild(Ss(t));i=Zr(i,bs(),n)}}}}}return i}function go(e,t,n,i,s){if(i||s){const r=ro(e.visibleWrites,t);if(!s&&oo(r))return n;if(s||null!=n||no(r,bs())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(Os(e.path,t)||Os(t,e.path))};return ao(po(e.allWrites,r,t),n||dr.EMPTY_NODE)}return null}{const i=io(e.visibleWrites,t);if(null!=i)return i;{const i=ro(e.visibleWrites,t);return oo(i)?n:null!=n||no(i,bs())?ao(i,n||dr.EMPTY_NODE):null}}}function mo(e,t,n,i){return go(e.writeTree,e.treePath,t,n,i)}function _o(e,t){return function(e,t,n){let i=dr.EMPTY_NODE;const s=io(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(sr,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=ro(e.visibleWrites,t);return n.forEachChild(sr,((e,t)=>{const n=ao(ro(s,new Is(e)),t);i=i.updateImmediateChild(e,n)})),so(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return so(ro(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function yo(e,t,n,i){return function(e,t,n,i,s){o(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Rs(t,n);if(no(e.visibleWrites,r))return null;{const t=ro(e.visibleWrites,r);return oo(t)?s.getChild(n):ao(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function vo(e,t){return function(e,t){return io(e.visibleWrites,t)}(e.writeTree,Rs(e.treePath,t))}function wo(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const c=ro(e.visibleWrites,t),h=io(c,bs());if(null!=h)a=h;else{if(null==n)return[];a=ao(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();for(;c&&e.length<s;)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function To(e,t,n){return function(e,t,n,i){const s=Rs(t,n),r=io(e.visibleWrites,s);return null!=r?r:i.isCompleteForChild(n)?ao(ro(e.visibleWrites,s),i.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function Io(e,t){return bo(Rs(e.treePath,t),e.writeTree)}function bo(e,t){return{treePath:e,writeTree:t}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Co{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;o("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),o(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,Tr(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,wr(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,vr(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw a("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Tr(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Eo=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class So{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Br(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return To(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Qr(this.viewCache_),s=wo(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function ko(e,t,n,i,s){const r=new Co;let c,h;if(n.type===Lr.OVERWRITE){const a=n;a.source.fromUser?c=Ro(e,t,a.path,a.snap,i,s,r):(o(a.source.fromServer,"Unknown source."),h=a.source.tagged||t.serverCache.isFiltered()&&!Ds(a.path),c=Ao(e,t,a.path,a.snap,i,s,h,r))}else if(n.type===Lr.MERGE){const a=n;a.source.fromUser?c=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,c)=>{const h=Rs(n,i);Do(t,Cs(h))&&(a=Ro(e,a,h,c,s,r,o))})),i.foreach(((i,c)=>{const h=Rs(n,i);Do(t,Cs(h))||(a=Ro(e,a,h,c,s,r,o))})),a}(e,t,a.path,a.children,i,s,r):(o(a.source.fromServer,"Unknown source."),h=a.source.tagged||t.serverCache.isFiltered(),c=xo(e,t,a.path,a.children,i,s,h,r))}else if(n.type===Lr.ACK_USER_WRITE){const a=n;c=a.revert?function(e,t,n,i,s,r){let a;if(null!=vo(i,n))return t;{const c=new So(i,t,s),h=t.eventCache.getNode();let l;if(Ds(n)||".priority"===Cs(n)){let n;if(t.serverCache.isFullyInitialized())n=mo(i,Qr(t));else{const e=t.serverCache.getNode();o(e instanceof dr,"serverChildren would be complete if leaf node"),n=_o(i,e)}l=e.filter.updateFullNode(h,n,r)}else{const s=Cs(n);let o=To(i,s,t.serverCache);null==o&&t.serverCache.isCompleteForChild(s)&&(o=h.getImmediateChild(s)),l=null!=o?e.filter.updateChild(h,s,o,Ss(n),c,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(h,s,dr.EMPTY_NODE,Ss(n),c,r):h,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=mo(i,Qr(t)),a.isLeafNode()&&(l=e.filter.updateFullNode(l,a,r)))}return a=t.serverCache.isFullyInitialized()||null!=vo(i,bs()),Hr(t,l,a,e.filter.filtersNodes())}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e,t,a.path,i,s,r):function(e,t,n,i,s,r,o){if(null!=vo(s,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(Ds(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Ao(e,t,n,c.getNode().getChild(n),s,r,a,o);if(Ds(n)){let i=new Jr(null);return c.getNode().forEachChild(Ws,((e,t)=>{i=i.set(new Is(e),t)})),xo(e,t,n,i,s,r,a,o)}return t}{let h=new Jr(null);return i.foreach(((e,t)=>{const i=Rs(n,e);c.isCompleteForPath(i)&&(h=h.set(e,c.getNode().getChild(i)))})),xo(e,t,n,h,s,r,a,o)}}(e,t,a.path,a.affectedTree,i,s,r)}else{if(n.type!==Lr.LISTEN_COMPLETE)throw a("Unknown operation type: "+n.type);c=function(e,t,n,i,s){const r=t.serverCache,o=Kr(t,r.getNode(),r.isFullyInitialized()||Ds(n),r.isFiltered());return No(e,o,n,i,Eo,s)}(e,t,n.path,i,r)}const l=r.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Gr(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(yr(Gr(t)))}}(t,c,l),{viewCache:c,changes:l}}function No(e,t,n,i,s,r){const a=t.eventCache;if(null!=vo(i,n))return t;{let c,h;if(Ds(n))if(o(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Qr(t),s=_o(i,n instanceof dr?n:dr.EMPTY_NODE);c=e.filter.updateFullNode(t.eventCache.getNode(),s,r)}else{const n=mo(i,Qr(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const l=Cs(n);if(".priority"===l){o(1===Es(n),"Can't have a priority with additional path components");const s=a.getNode();h=t.serverCache.getNode();const r=yo(i,n,s,h);c=null!=r?e.filter.updatePriority(s,r):a.getNode()}else{const o=Ss(n);let u;if(a.isCompleteForChild(l)){h=t.serverCache.getNode();const e=yo(i,n,a.getNode(),h);u=null!=e?a.getNode().getImmediateChild(l).updateChild(o,e):a.getNode().getImmediateChild(l)}else u=To(i,l,t.serverCache);c=null!=u?e.filter.updateChild(a.getNode(),l,u,o,s,r):a.getNode()}}return Hr(t,c,a.isFullyInitialized()||Ds(n),e.filter.filtersNodes())}}function Ao(e,t,n,i,s,r,o,a){const c=t.serverCache;let h;const l=o?e.filter:e.filter.getIndexedFilter();if(Ds(n))h=l.updateFullNode(c.getNode(),i,null);else if(l.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);h=l.updateFullNode(c.getNode(),e,null)}else{const e=Cs(n);if(!c.isCompleteForPath(n)&&Es(n)>1)return t;const s=Ss(n),r=c.getNode().getImmediateChild(e).updateChild(s,i);h=".priority"===e?l.updatePriority(c.getNode(),r):l.updateChild(c.getNode(),e,r,s,Eo,null)}const u=Kr(t,h,c.isFullyInitialized()||Ds(n),l.filtersNodes());return No(e,u,n,s,new So(s,u,r),a)}function Ro(e,t,n,i,s,r,o){const a=t.eventCache;let c,h;const l=new So(s,t,r);if(Ds(n))h=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=Hr(t,h,!0,e.filter.filtersNodes());else{const s=Cs(n);if(".priority"===s)h=e.filter.updatePriority(t.eventCache.getNode(),i),c=Hr(t,h,a.isFullyInitialized(),a.isFiltered());else{const r=Ss(n),h=a.getNode().getImmediateChild(s);let u;if(Ds(r))u=i;else{const e=l.getCompleteChild(s);u=null!=e?".priority"===ks(r)&&e.getChild(As(r)).isEmpty()?e:e.updateChild(r,i):dr.EMPTY_NODE}c=h.equals(u)?t:Hr(t,e.filter.updateChild(a.getNode(),s,u,r,l,o),a.isFullyInitialized(),e.filter.filtersNodes())}}return c}function Do(e,t){return e.eventCache.isCompleteForChild(t)}function Po(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function xo(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,h=t;c=Ds(n)?i:new Jr(null).setTree(n,i);const l=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(l.hasChild(n)){const c=Po(0,t.serverCache.getNode().getImmediateChild(n),i);h=Ao(e,h,new Is(n),c,s,r,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!l.hasChild(n)&&!c){const c=Po(0,t.serverCache.getNode().getImmediateChild(n),i);h=Ao(e,h,new Is(n),c,s,r,o,a)}})),h}class Oo{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Ir(n.getIndex()),s=(r=n).loadsAllData()?new Ir(r.getIndex()):r.hasLimit()?new Cr(r):new br(r);var r;this.processor_=function(e){return{filter:e}}(s);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(dr.EMPTY_NODE,o.getNode(),null),h=s.updateFullNode(dr.EMPTY_NODE,a.getNode(),null),l=new Br(c,o.isFullyInitialized(),i.filtersNodes()),u=new Br(h,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Wr(u,l),this.eventGenerator_=new zr(this.query_)}get query(){return this.query_}}function Lo(e,t){const n=Qr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ds(t)&&!n.getImmediateChild(Cs(t)).isEmpty())?n.getChild(t):null}function Mo(e){return 0===e.eventRegistrations_.length}function Fo(e,t,n){const i=[];if(n){o(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,s);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Uo(e,t,n,i){t.type===Lr.MERGE&&null!==t.source.queryId&&(o(Qr(e.viewCache_),"We should always have a full cache before handling merges"),o(Gr(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=ko(e.processor_,s,t,n,i);var a,c;return a=e.processor_,c=r.viewCache,o(c.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),o(c.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),o(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,Vo(e,r.changes,r.viewCache.eventCache.getNode(),null)}function Vo(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),$r(e,s,"child_removed",t,i,n),$r(e,s,"child_added",t,i,n),$r(e,s,"child_moved",r,i,n),$r(e,s,"child_changed",t,i,n),$r(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */let qo,jo;class Bo{constructor(){this.views=new Map}}function zo(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return o(null!=r,"SyncTree gave us an op for an invalid query."),Uo(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(Uo(r,t,n,i));return s}}function $o(e,t,n,i,s,r){const o=function(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=mo(n,s?i:null),r=!1;e?r=!0:i instanceof dr?(e=_o(n,i),r=!1):(e=dr.EMPTY_NODE,r=!1);const o=Wr(new Br(e,r,!1),new Br(i,s,!1));return new Oo(t,o)}return o}(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(sr,((e,t)=>{i.push(vr(e,t))})),n.isFullyInitialized()&&i.push(yr(n.getNode())),Vo(e,i,n.getNode(),t)}(o,n)}function Wo(e,t,n,i){const s=t._queryIdentifier,r=[];let a=[];const c=Yo(e);if("default"===s)for(const[o,h]of e.views.entries())a=a.concat(Fo(h,n,i)),Mo(h)&&(e.views.delete(o),h.query._queryParams.loadsAllData()||r.push(h.query));else{const t=e.views.get(s);t&&(a=a.concat(Fo(t,n,i)),Mo(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||r.push(t.query)))}return c&&!Yo(e)&&r.push(new(o(qo,"Reference.ts has not been loaded"),qo)(t._repo,t._path)),{removed:r,events:a}}function Ho(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Ko(e,t){let n=null;for(const i of e.views.values())n=n||Lo(i,t);return n}function Go(e,t){if(t._queryParams.loadsAllData())return Jo(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Qo(e,t){return null!=Go(e,t)}function Yo(e){return null!=Jo(e)}function Jo(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */let Xo=1;class Zo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Jr(null),this.pendingWriteTree_={visibleWrites:Xr.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ea(e,t,n,i,s){return function(e,t,n,i,s){o(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=Zr(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,s),s?oa(e,new qr({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function ta(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(lo(e.pendingWriteTree_,t)){let t=new Jr(null);return null!=i.snap?t=t.set(bs(),!0):$i(i.children,(e=>{t=t.set(new Is(e),!0)})),oa(e,new Ur(i.path,t,n))}return[]}function na(e,t,n){return oa(e,new qr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function ia(e,t,n,i,s=!1){const r=t._path,o=e.syncPointTree_.get(r);let a=[];if(o&&("default"===t._queryIdentifier||Qo(o,t))){const c=Wo(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(r));const h=c.removed;if(a=c.events,!s){const n=-1!==h.findIndex((e=>e._queryParams.loadsAllData())),s=e.syncPointTree_.findOnPath(r,((e,t)=>Yo(t)));if(n&&!s){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Yo(t))return[Jo(t)];{let e=[];return t&&(e=Ho(t)),$i(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],s=i.query,r=ha(e,i);e.listenProvider_.startListening(ga(s),la(e,s),r.hashFn,r.onComplete)}}}if(!s&&h.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(ga(t),n)}else h.forEach((t=>{const n=e.queryToTagMap.get(ua(t));e.listenProvider_.stopListening(ga(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=ua(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,h)}return a}function sa(e,t,n,i=!1){const s=t._path;let r=null,a=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=Ps(e,s);r=r||Ko(t,n),a=a||Yo(t)}));let c,h=e.syncPointTree_.get(s);h?(a=a||Yo(h),r=r||Ko(h,bs())):(h=new Bo,e.syncPointTree_=e.syncPointTree_.set(s,h)),null!=r?c=!0:(c=!1,r=dr.EMPTY_NODE,e.syncPointTree_.subtree(s).foreachChild(((e,t)=>{const n=Ko(t,bs());n&&(r=r.updateImmediateChild(e,n))})));const l=Qo(h,t);if(!l&&!t._queryParams.loadsAllData()){const n=ua(t);o(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Xo++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let u=$o(h,t,n,ho(e.pendingWriteTree_,s),r,c);if(!l&&!a&&!i){const n=Go(h,t);u=u.concat(function(e,t,n){const i=t._path,s=la(e,t),r=ha(e,n),a=e.listenProvider_.startListening(ga(t),s,r.hashFn,r.onComplete),c=e.syncPointTree_.subtree(i);if(s)o(!Yo(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold(((e,t,n)=>{if(!Ds(e)&&t&&Yo(t))return[Jo(t).query];{let e=[];return t&&(e=e.concat(Ho(t).map((e=>e.query)))),$i(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(ga(i),la(e,i))}}return a}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e,t,n))}return u}function ra(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Ko(n,Ps(e,t));if(i)return i}));return go(i,t,s,n,!0)}function oa(e,t){return aa(t,e.syncPointTree_,null,ho(e.pendingWriteTree_,bs()))}function aa(e,t,n,i){if(Ds(e.path))return ca(e,t,n,i);{const s=t.get(bs());null==n&&null!=s&&(n=Ko(s,bs()));let r=[];const o=Cs(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=Io(i,o);r=r.concat(aa(a,c,e,t))}return s&&(r=r.concat(zo(s,e,i,n))),r}}function ca(e,t,n,i){const s=t.get(bs());null==n&&null!=s&&(n=Ko(s,bs()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=Io(i,t),c=e.operationForChild(t);c&&(r=r.concat(ca(c,s,o,a)))})),s&&(r=r.concat(zo(s,e,i,n))),r}function ha(e,t){const n=t.query,i=la(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||dr.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=da(e,n);if(i){const n=fa(i),s=n.path,r=n.queryId,o=Ps(s,t);return pa(e,s,new Vr(Fr(r),o))}return[]}(e,n._path,i):function(e,t){return oa(e,new Vr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return ia(e,n,null,i)}}}}function la(e,t){const n=ua(t);return e.queryToTagMap.get(n)}function ua(e){return e._path.toString()+"$"+e._queryIdentifier}function da(e,t){return e.tagToQueryMap.get(t)}function fa(e){const t=e.indexOf("$");return o(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Is(e.substr(0,t))}}function pa(e,t,n){const i=e.syncPointTree_.get(t);return o(i,"Missing sync point for query tag that we're tracking"),zo(i,n,ho(e.pendingWriteTree_,t),null)}function ga(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(o(jo,"Reference.ts has not been loaded"),jo)(e._repo,e._path):e}class ma{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ma(t)}node(){return this.node_}}class _a{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Rs(this.path_,e);return new _a(this.syncTree_,t)}node(){return ra(this.syncTree_,this.path_)}}const ya=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},va=function(e,t,n){return e&&"object"==typeof e?(o(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?wa(e[".sv"],t,n):"object"==typeof e[".sv"]?Ta(e[".sv"],t):void o(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},wa=function(e,t,n){if("timestamp"===e)return n.timestamp;o(!1,"Unexpected server value: "+e)},Ta=function(e,t,n){e.hasOwnProperty("increment")||o(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&o(!1,"Unexpected increment value: "+i);const s=t.node();if(o(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},Ia=function(e,t,n,i){return Ca(t,new _a(n,e),i)},ba=function(e,t,n){return Ca(e,new ma(t),n)};function Ca(e,t,n){const i=e.getPriority().val(),s=va(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=va(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new ir(r,gr(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new ir(s))),i.forEachChild(sr,((e,i)=>{const s=Ca(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Ea{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Sa(e,t){let n=t instanceof Is?t:new Is(t),i=e,s=Cs(n);for(;null!==s;){const e=F(i.node.children,s)||{children:{},childCount:0};i=new Ea(s,i,e),n=Ss(n),s=Cs(n)}return i}function ka(e){return e.node.value}function Na(e,t){e.node.value=t,xa(e)}function Aa(e){return e.node.childCount>0}function Ra(e,t){$i(e.node.children,((n,i)=>{t(new Ea(n,e,i))}))}function Da(e,t,n,i){n&&!i&&t(e),Ra(e,(e=>{Da(e,t,!0,i)})),n&&i&&t(e)}function Pa(e){return new Is(null===e.parent?e.name:Pa(e.parent)+"/"+e.name)}function xa(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===ka(e)&&!Aa(e)}(n),s=M(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,xa(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,xa(e))}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e.parent,e.name,e)}const Oa=/[\[\].#$\/\u0000-\u001F\u007F]/,La=/[\[\].#$\u0000-\u001F\u007F]/,Ma=10485760,Fa=function(e){return"string"==typeof e&&0!==e.length&&!Oa.test(e)},Ua=function(e){return"string"==typeof e&&0!==e.length&&!La.test(e)},Va=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!Mi(e)||e&&"object"==typeof e&&M(e,".sv")},qa=function(e,t,n,i){i&&void 0===t||ja(H(e,"value"),t,n)},ja=function(e,t,n){const i=n instanceof Is?new Ls(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Fs(i));if("function"==typeof t)throw new Error(e+"contains a function "+Fs(i)+" with contents = "+t.toString());if(Mi(t))throw new Error(e+"contains "+t.toString()+" "+Fs(i));if("string"==typeof t&&t.length>Ma/3&&K(t)>Ma)throw new Error(e+"contains a string greater than "+Ma+" utf8 bytes "+Fs(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if($i(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!Fa(t)))throw new Error(e+" contains an invalid key ("+t+") "+Fs(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=K(a),Ms(o),ja(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=K(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&s)throw new Error(e+' contains ".value" child '+Fs(i)+" in addition to actual children.")}},Ba=function(e,t,n,i){if(!(i&&void 0===n||Ua(n)))throw new Error(H(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},za=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ba(e,t,n,i)},$a=function(e,t){if(".info"===Cs(t))throw new Error(e+" failed = Can't modify data under /.info/")},Wa=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Fa(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Ua(e)}(n))throw new Error(H(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Ha{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ka(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||xs(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function Ga(e,t,n){Ka(e,n),Ya(e,(e=>xs(e,t)))}function Qa(e,t,n){Ka(e,n),Ya(e,(e=>Os(e,t)||Os(t,e)))}function Ya(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];s&&(t(s.path)?(Ja(e.eventLists_[i]),e.eventLists_[i]=null):n=!1)}n&&(e.eventLists_=[]),e.recursionDepth_--}function Ja(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();Ai&&Di("event: "+n.toString()),Gi(i)}}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Xa="repo_interrupt",Za=25;class ec{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ha,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Rr(),this.transactionQueueTree_=new Ea,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function tc(e,t,n){if(e.stats_=cs(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Nr(e.repoInfo_,((t,n,i,s)=>{sc(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>rc(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{O(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new qs(e.repoInfo_,t,((t,n,i,s)=>{sc(e,t,n,i,s)}),(t=>{rc(e,t)}),(t=>{!function(e,t){$i(t,((t,n)=>{oc(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return as[n]||(as[n]=t()),as[n]}(e.repoInfo_,(()=>new Or(e.stats_,e.server_))),e.infoData_=new Ar,e.infoSyncTree_=new Zo({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=na(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),oc(e,"connected",!1),e.serverSyncTree_=new Zo({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);Qa(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function nc(e){const t=e.infoData_.getNode(new Is(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function ic(e){return ya({timestamp:nc(e)})}function sc(e,t,n,i,s){e.dataUpdateCount++;const r=new Is(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=V(n,(e=>gr(e)));o=function(e,t,n,i){const s=da(e,i);if(s){const i=fa(s),r=i.path,o=i.queryId,a=Ps(r,t),c=Jr.fromObject(n);return pa(e,r,new jr(Fr(o),a,c))}return[]}(e.serverSyncTree_,r,t,s)}else{const t=gr(n);o=function(e,t,n,i){const s=da(e,i);if(null!=s){const i=fa(s),r=i.path,o=i.queryId,a=Ps(r,t);return pa(e,r,new qr(Fr(o),a,n))}return[]}(e.serverSyncTree_,r,t,s)}else if(i){const t=V(n,(e=>gr(e)));o=function(e,t,n){const i=Jr.fromObject(n);return oa(e,new jr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=gr(n);o=na(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=fc(e,r)),Qa(e.eventQueue_,a,o)}function rc(e,t){oc(e,"connected",t),!1===t&&function(e){lc(e,"onDisconnectEvents");const t=ic(e),n=Rr();Pr(e.onDisconnect_,bs(),((i,s)=>{const r=Ia(i,s,e.serverSyncTree_,t);Dr(n,i,r)}));let i=[];Pr(n,bs(),((t,n)=>{i=i.concat(na(e.serverSyncTree_,t,n));const s=yc(e,t);fc(e,s)})),e.onDisconnect_=Rr(),Qa(e.eventQueue_,bs(),i)}(e)}function oc(e,t,n){const i=new Is("/.info/"+t),s=gr(n);e.infoData_.updateSnapshot(i,s);const r=na(e.infoSyncTree_,i,s);Qa(e.eventQueue_,i,r)}function ac(e){return e.nextWriteId_++}function cc(e,t,n,i,s){lc(e,"set",{path:t.toString(),value:n,priority:i});const r=ic(e),o=gr(n,i),a=ra(e.serverSyncTree_,t),c=ba(o,a,r),h=ac(e),l=ea(e.serverSyncTree_,t,c,h,!0);Ka(e.eventQueue_,l),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const r="ok"===n;r||Li("set at "+t+" failed: "+n);const o=ta(e.serverSyncTree_,h,!r);Qa(e.eventQueue_,t,o),function(e,t,n,i){t&&Gi((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;i&&(s+=": "+i);const r=new Error(s);r.code=e,t(r)}}))}(0,s,n,i)}));const u=yc(e,t);fc(e,u),Qa(e.eventQueue_,u,[])}function hc(e,t,n){let i;i=".info"===Cs(t._path)?ia(e.infoSyncTree_,t,n):ia(e.serverSyncTree_,t,n),Ga(e.eventQueue_,t._path,i)}function lc(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Di(n,...t)}function uc(e,t,n){return ra(e.serverSyncTree_,t,n)||dr.EMPTY_NODE}function dc(e,t=e.transactionQueueTree_){if(t||_c(e,t),ka(t)){const n=gc(e,t);o(n.length>0,"Sending zero length transaction queue"),n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),s=uc(e,t,i);let r=s;const a=s.hash();for(let l=0;l<n.length;l++){const e=n[l];o(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=Ps(t,e.path);r=r.updateChild(i,e.currentOutputSnapshotRaw)}const c=r.val(!0),h=t;e.server_.put(h.toString(),c,(i=>{lc(e,"transaction put response",{path:h.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(ta(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();_c(e,Sa(e.transactionQueueTree_,t)),dc(e,e.transactionQueueTree_),Qa(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)Gi(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Li("transaction at "+h.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}fc(e,t)}}),a)}(e,Pa(t),n)}else Aa(t)&&Ra(t,(t=>{dc(e,t)}))}function fc(e,t){const n=pc(e,t),i=Pa(n);return function(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)),a=r.map((e=>e.currentWriteId));for(let h=0;h<t.length;h++){const r=t[h],l=Ps(n,r.path);let u,d=!1;if(o(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===r.status)d=!0,u=r.abortReason,s=s.concat(ta(e.serverSyncTree_,r.currentWriteId,!0));else if(0===r.status)if(r.retryCount>=Za)d=!0,u="maxretry",s=s.concat(ta(e.serverSyncTree_,r.currentWriteId,!0));else{const n=uc(e,r.path,a);r.currentInputSnapshot=n;const i=t[h].update(n.val());if(void 0!==i){ja("transaction failed: Data returned ",i,r.path);let t=gr(i);"object"==typeof i&&null!=i&&M(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=r.currentWriteId,c=ic(e),h=ba(t,n,c);r.currentOutputSnapshotRaw=t,r.currentOutputSnapshotResolved=h,r.currentWriteId=ac(e),a.splice(a.indexOf(o),1),s=s.concat(ea(e.serverSyncTree_,r.path,h,r.currentWriteId,r.applyLocally)),s=s.concat(ta(e.serverSyncTree_,o,!0))}else d=!0,u="nodata",s=s.concat(ta(e.serverSyncTree_,r.currentWriteId,!0))}Qa(e.eventQueue_,n,s),s=[],d&&(t[h].status=2,c=t[h].unwatcher,setTimeout(c,Math.floor(0)),t[h].onComplete&&("nodata"===u?i.push((()=>t[h].onComplete(null,!1,t[h].currentInputSnapshot))):i.push((()=>t[h].onComplete(new Error(u),!1,null)))))}var c;_c(e,e.transactionQueueTree_);for(let o=0;o<i.length;o++)Gi(i[o]);dc(e,e.transactionQueueTree_)}(e,gc(e,n),i),i}function pc(e,t){let n,i=e.transactionQueueTree_;for(n=Cs(t);null!==n&&void 0===ka(i);)i=Sa(i,n),n=Cs(t=Ss(t));return i}function gc(e,t){const n=[];return mc(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function mc(e,t,n){const i=ka(t);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Ra(t,(t=>{mc(e,t,n)}))}function _c(e,t){const n=ka(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Na(t,n.length>0?n:void 0)}Ra(t,(t=>{_c(e,t)}))}function yc(e,t){const n=Pa(pc(e,t)),i=Sa(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{vc(e,t)})),vc(e,i),Da(i,(t=>{vc(e,t)})),n}function vc(e,t){const n=ka(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(o(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):(o(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(ta(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?Na(t,void 0):n.length=r+1,Qa(e.eventQueue_,Pa(t),s);for(let e=0;e<i.length;e++)Gi(i[e])}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const wc=function(e,t){const n=Tc(e),i=n.namespace;"firebase.com"===n.domain&&Oi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Oi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Li("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new is(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new Is(n.pathString)}},Tc=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",c=443;if("string"==typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let l=e.indexOf("/");-1===l&&(l=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(l,u)),l<u&&(s=function(e){let t="";const n=e.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let e=n[s];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}(e.substring(l,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Li(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));h=t.indexOf(":"),h>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(h+1),10)):h=t.length;const f=t.slice(0,h);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Ic{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+O(this.snapshot.exportVal())}}class bc{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Cc{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return o(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Ec{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return Ds(this._path)?null:ks(this._path)}get ref(){return new Sc(this._repo,this._path)}get _queryIdentifier(){const e=kr(this._queryParams),t=Bi(e);return"{}"===t?"default":t}get _queryObject(){return kr(this._queryParams)}isEqual(e){if(!((e=G(e))instanceof Ec))return!1;const t=this._repo===e._repo,n=xs(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Sc extends Ec{constructor(e,t){super(e,t,new Er,!1)}get parent(){const e=As(this._path);return null===e?null:new Sc(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class kc{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Is(e),n=Nc(this.ref,e);return new kc(this._node.getChild(t),n,sr)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,((t,n)=>e(new kc(n,Nc(this.ref,t),sr))))}hasChild(e){const t=new Is(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Nc(e,t){return null===Cs((e=G(e))._path)?za("child","path",t,!1):Ba("child","path",t,!1),new Sc(e._repo,Rs(e._path,t))}function Ac(e,t){e=G(e),$a("set",e._path),qa("set",t,e._path,!1);const n=new I;return cc(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}class Rc{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Ic("value",this,new kc(e.snapshotNode,new Sc(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new bc(this,e,t):null}matches(e){return e instanceof Rc&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Dc{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new bc(this,e,t):null}createEvent(e,t){o(null!=e.childName,"Child events should have a childName.");const n=Nc(new Sc(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Ic(e.type,this,new kc(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Dc&&this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext))}hasAnyCallback(){return!!this.callbackContext}}function Pc(e,t,n,i,s){let r;if("object"==typeof i&&(r=void 0,s=i),"function"==typeof i&&(r=i),s&&s.onlyOnce){const t=n,i=(n,i)=>{hc(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new Cc(n,r||void 0),a="value"===t?new Rc(o):new Dc(t,o);return function(e,t,n){let i;i=".info"===Cs(t._path)?sa(e.infoSyncTree_,t,n):sa(e.serverSyncTree_,t,n),Ga(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>hc(e._repo,e,a)}function xc(e,t,n,i){return Pc(e,"value",t,n,i)}!function(e){o(!qo,"__referenceConstructor has already been defined"),qo=e}(Sc),function(e){o(!jo,"__referenceConstructor has already been defined"),jo=e}(Sc);
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const Oc="FIREBASE_DATABASE_EMULATOR_HOST",Lc={};let Mc=!1;function Fc(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||Oi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Di("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=wc(r,s),h=c.repoInfo;"undefined"!=typeof process&&mi&&(a=mi[Oc]),a?(o=!0,r=`http://${a}?ns=${h.namespace}`,c=wc(r,s),h=c.repoInfo):o=!c.repoInfo.secure;const l=s&&o?new Xi(Xi.OWNER):new Ji(e.name,e.options,t);Wa("Invalid Firebase Database URL",c),Ds(c.path)||Oi("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(e,t,n,i){let s=Lc[t.name];s||(s={},Lc[t.name]=s);let r=s[e.toURLString()];return r&&Oi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ec(e,Mc,n,i),s[e.toURLString()]=r,r}(h,e,l,new Yi(e.name,n));return new Vc(u,e)}function Uc(e,t){const n=Lc[t];n&&n[e.key]===e||Oi(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Xa)}(e),delete n[e.key]}class Vc{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(tc(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Sc(this._repo,bs())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Uc(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Oi("Cannot call "+e+" on a deleted database.")}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class qc{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}qs.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},qs.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},function(e){vi=ye,pe(new Q("database",((e,{instanceIdentifier:t})=>Fc(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Te(_i,yi,e),Te(_i,yi,"esm2017")}();var jc,Bc="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},zc=zc||{},$c=Bc||self;function Wc(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Hc(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Kc="closure_uid_"+(1e9*Math.random()>>>0),Gc=0;function Qc(e,t,n){return e.call.apply(e.bind,arguments)}function Yc(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Jc(e,t,n){return(Jc=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Qc:Yc).apply(null,arguments)}function Xc(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Zc(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return t.prototype[n].apply(e,s)}}function eh(){this.s=this.s,this.o=this.o}eh.prototype.s=!1,eh.prototype.sa=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,Kc)&&e[Kc]||(e[Kc]=++Gc))},eh.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const th=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function nh(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function ih(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(Wc(t)){const n=e.length||0,i=t.length||0;e.length=n+i;for(let s=0;s<i;s++)e[n+s]=t[s]}else e.push(t)}}function sh(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}sh.prototype.h=function(){this.defaultPrevented=!0};var rh=function(){if(!$c.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};$c.addEventListener("test",e,t),$c.removeEventListener("test",e,t)}catch(n){}return e}();function oh(e){return/^[\s\xa0]*$/.test(e)}function ah(){var e=$c.navigator;return e&&(e=e.userAgent)?e:""}function ch(e){return-1!=ah().indexOf(e)}function hh(e){return hh[" "](e),e}hh[" "]=function(){};var lh,uh,dh,fh=ch("Opera"),ph=ch("Trident")||ch("MSIE"),gh=ch("Edge"),mh=gh||ph,_h=ch("Gecko")&&!(-1!=ah().toLowerCase().indexOf("webkit")&&!ch("Edge"))&&!(ch("Trident")||ch("MSIE"))&&!ch("Edge"),yh=-1!=ah().toLowerCase().indexOf("webkit")&&!ch("Edge");function vh(){var e=$c.document;return e?e.documentMode:void 0}e:{var wh="",Th=(uh=ah(),_h?/rv:([^\);]+)(\)|;)/.exec(uh):gh?/Edge\/([\d\.]+)/.exec(uh):ph?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(uh):yh?/WebKit\/(\S+)/.exec(uh):fh?/(?:Version)[ \/]?(\S+)/.exec(uh):void 0);if(Th&&(wh=Th?Th[1]:""),ph){var Ih=vh();if(null!=Ih&&Ih>parseFloat(wh)){lh=String(Ih);break e}}lh=wh}if($c.document&&ph){var bh=vh();dh=bh||parseInt(lh,10)||void 0}else dh=void 0;var Ch=dh;function Eh(e,t){if(sh.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(_h){e:{try{hh(t.nodeName);var s=!0;break e}catch(r){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Sh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Eh.$.h.call(this)}}Zc(Eh,sh);var Sh={2:"touch",3:"pen",4:"mouse"};Eh.prototype.h=function(){Eh.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var kh="closure_listenable_"+(1e6*Math.random()|0),Nh=0;function Ah(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=s,this.key=++Nh,this.fa=this.ia=!1}function Rh(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Dh(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function Ph(e){const t={};for(const n in e)t[n]=e[n];return t}const xh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Oh(e,t){let n,i;for(let s=1;s<arguments.length;s++){for(n in i=arguments[s],i)e[n]=i[n];for(let t=0;t<xh.length;t++)n=xh[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function Lh(e){this.src=e,this.g={},this.h=0}function Mh(e,t){var n=t.type;if(n in e.g){var i,s=e.g[n],r=th(s,t);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Rh(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Fh(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==i)return s}return-1}Lh.prototype.add=function(e,t,n,i,s){var r=e.toString();(e=this.g[r])||(e=this.g[r]=[],this.h++);var o=Fh(e,t,i,s);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new Ah(t,this.src,r,!!i,s)).ia=n,e.push(t)),t};var Uh="closure_lm_"+(1e6*Math.random()|0),Vh={};function qh(e,t,n,i,s){if(i&&i.once)return Bh(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)qh(e,t[r],n,i,s);return null}return n=Qh(n),e&&e[kh]?e.O(t,n,Hc(i)?!!i.capture:!!i,s):jh(e,t,n,!1,i,s)}function jh(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=Hc(s)?!!s.capture:!!s,a=Kh(e);if(a||(e[Uh]=a=new Lh(e)),(n=a.add(t,n,i,o,r)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Hh;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)rh||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(Wh(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function Bh(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Bh(e,t[r],n,i,s);return null}return n=Qh(n),e&&e[kh]?e.P(t,n,Hc(i)?!!i.capture:!!i,s):jh(e,t,n,!0,i,s)}function zh(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)zh(e,t[r],n,i,s);else i=Hc(i)?!!i.capture:!!i,n=Qh(n),e&&e[kh]?(e=e.i,(t=String(t).toString())in e.g&&-1<(n=Fh(r=e.g[t],n,i,s))&&(Rh(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete e.g[t],e.h--))):e&&(e=Kh(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Fh(t,n,i,s)),(n=-1<e?t[e]:null)&&$h(n))}function $h(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[kh])Mh(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(Wh(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Kh(t))?(Mh(n,e),0==n.h&&(n.src=null,t[Uh]=null)):Rh(e)}}}function Wh(e){return e in Vh?Vh[e]:Vh[e]="on"+e}function Hh(e,t){if(e.fa)e=!0;else{t=new Eh(t,this);var n=e.listener,i=e.la||e.src;e.ia&&$h(e),e=n.call(i,t)}return e}function Kh(e){return(e=e[Uh])instanceof Lh?e:null}var Gh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qh(e){return"function"==typeof e?e:(e[Gh]||(e[Gh]=function(t){return e.handleEvent(t)}),e[Gh])}function Yh(){eh.call(this),this.i=new Lh(this),this.S=this,this.J=null}function Jh(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,"string"==typeof t)t=new sh(t,e);else if(t instanceof sh)t.target=t.target||e;else{var s=t;Oh(t=new sh(i,e),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=Xh(o,i,!0,t)&&s}if(s=Xh(o=t.g=e,i,!0,t)&&s,s=Xh(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)s=Xh(o=t.g=n[r],i,!1,t)&&s}function Xh(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Mh(e.i,o),s=!1!==a.call(c,i)&&s}}return s&&!i.defaultPrevented}Zc(Yh,eh),Yh.prototype[kh]=!0,Yh.prototype.removeEventListener=function(e,t,n,i){zh(this,e,t,n,i)},Yh.prototype.N=function(){if(Yh.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Rh(n[i]);delete t.g[e],t.h--}}this.J=null},Yh.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},Yh.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var Zh=$c.JSON.stringify;function el(){var e=al;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var tl=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new nl),(e=>e.reset()));class nl{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function il(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function sl(e){$c.setTimeout((()=>{throw e}),0)}let rl,ol=!1,al=new class{constructor(){this.h=this.g=null}add(e,t){const n=tl.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},cl=()=>{const e=$c.Promise.resolve(void 0);rl=()=>{e.then(hl)}};var hl=()=>{for(var e;e=el();){try{e.h.call(e.g)}catch(n){sl(n)}var t=tl;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ol=!1};function ll(e,t){Yh.call(this),this.h=e||1,this.g=t||$c,this.j=Jc(this.qb,this),this.l=Date.now()}function ul(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function dl(e,t,n){if("function"==typeof e)n&&(e=Jc(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Jc(e.handleEvent,e)}return 2147483647<Number(t)?-1:$c.setTimeout(e,t||0)}function fl(e){e.g=dl((()=>{e.g=null,e.i&&(e.i=!1,fl(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Zc(ll,Yh),(jc=ll.prototype).ga=!1,jc.T=null,jc.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Jh(this,"tick"),this.ga&&(ul(this),this.start()))}},jc.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},jc.N=function(){ll.$.N.call(this),ul(this),delete this.g};class pl extends eh{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:fl(this)}N(){super.N(),this.g&&($c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gl(e){eh.call(this),this.h=e,this.g={}}Zc(gl,eh);var ml=[];function _l(e,t,n,i){Array.isArray(n)||(n&&(ml[0]=n.toString()),n=ml);for(var s=0;s<n.length;s++){var r=qh(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function yl(e){Dh(e.g,(function(e,t){this.g.hasOwnProperty(t)&&$h(e)}),e),e.g={}}function vl(){this.g=!0}function wl(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return Zh(n)}catch(a){return t}}(e,n)+(i?" "+i:"")}))}gl.prototype.N=function(){gl.$.N.call(this),yl(this)},gl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},vl.prototype.Ea=function(){this.g=!1},vl.prototype.info=function(){};var Tl={},Il=null;function bl(){return Il=Il||new Yh}function Cl(e){sh.call(this,Tl.Ta,e)}function El(e){const t=bl();Jh(t,new Cl(t))}function Sl(e,t){sh.call(this,Tl.STAT_EVENT,e),this.stat=t}function kl(e){const t=bl();Jh(t,new Sl(t,e))}function Nl(e,t){sh.call(this,Tl.Ua,e),this.size=t}function Al(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return $c.setTimeout((function(){e()}),t)}Tl.Ta="serverreachability",Zc(Cl,sh),Tl.STAT_EVENT="statevent",Zc(Sl,sh),Tl.Ua="timingevent",Zc(Nl,sh);var Rl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Dl={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Pl(){}function xl(e){return e.h||(e.h=e.i())}function Ol(){}Pl.prototype.h=null;var Ll,Ml={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Fl(){sh.call(this,"d")}function Ul(){sh.call(this,"c")}function Vl(){}function ql(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new gl(this),this.P=Bl,e=mh?125:void 0,this.V=new ll(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new jl}function jl(){this.i=null,this.g="",this.h=!1}Zc(Fl,sh),Zc(Ul,sh),Zc(Vl,Pl),Vl.prototype.g=function(){return new XMLHttpRequest},Vl.prototype.i=function(){return{}},Ll=new Vl;var Bl=45e3,zl={},$l={};function Wl(e,t,n){e.L=1,e.A=lu(ru(t)),e.u=n,e.S=!0,Hl(e,null)}function Hl(e,t){e.G=Date.now(),Yl(e),e.B=ru(e.A);var n=e.B,i=e.W;Array.isArray(i)||(i=[String(i)]),bu(n.i,"t",i),e.o=0,n=e.l.J,e.h=new jl,e.g=bd(e.l,n?t:null,!e.u),0<e.O&&(e.M=new pl(Jc(e.Pa,e,e.g),e.O)),_l(e.U,e.g,"readystatechange",e.nb),t=e.I?Ph(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),El(),function(e,t,n,i,s,r){e.info((function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var l=h[0];h=h[1];var u=l.split("_");o=2<=u.length&&"type"==u[1]?o+(l+"=")+h+"&":o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.v,e.B,e.m,e.W,e.u)}function Kl(e){return!!e.g&&"GET"==e.v&&2!=e.L&&e.l.Ha}function Gl(e,t,n){let i,s=!0;for(;!e.J&&e.o<n.length;){if(i=Ql(e,n),i==$l){4==t&&(e.s=4,kl(14),s=!1),wl(e.j,e.m,null,"[Incomplete Response]");break}if(i==zl){e.s=4,kl(15),wl(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}wl(e.j,e.m,i,null),tu(e,i)}Kl(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=t||0!=n.length||e.h.h||(e.s=1,kl(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),gd(t),t.M=!0,kl(11))):(wl(e.j,e.m,n,"[Invalid Chunked Response]"),eu(e),Zl(e))}function Ql(e,t){var n=e.o,i=t.indexOf("\n",n);return-1==i?$l:(n=Number(t.substring(n,i)),isNaN(n)?zl:(i+=1)+n>t.length?$l:(t=t.slice(i,i+n),e.o=i+n,t))}function Yl(e){e.Y=Date.now()+e.P,Jl(e,e.P)}function Jl(e,t){if(null!=e.C)throw Error("WatchDog timer not null");e.C=Al(Jc(e.lb,e),t)}function Xl(e){e.C&&($c.clearTimeout(e.C),e.C=null)}function Zl(e){0==e.l.H||e.J||yd(e.l,e)}function eu(e){Xl(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,ul(e.V),yl(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function tu(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||Ru(n.i,e)))if(!e.K&&Ru(n.i,e)&&3==n.H){try{var i=n.Ja.g.parse(t)}catch(h){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;_d(n),ad(n)}pd(n),kl(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&0==n.A&&!n.v&&(n.v=Al(Jc(n.ib,n),6e3));if(1>=Au(n.i)&&n.oa){try{n.oa()}catch(h){}n.oa=void 0}}else wd(n,11)}else if((e.K||n.g==e)&&_d(n),!oh(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let h=s[t];if(n.V=h[0],h=h[1],2==n.H)if("c"==h[0]){n.K=h[1],n.pa=h[2];const t=h[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const s=h[4];null!=s&&(n.Ga=s,n.l.info("SVER="+n.Ga));const l=h[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=e.g;if(u){const e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var r=i.i;r.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Du(r,r.h),r.h=null))}if(i.F){const e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.Da=e,hu(i.I,i.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=e;if((i=n).wa=Id(i,i.J?i.pa:null,i.Y),o.K){Pu(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.C&&(Xl(a),Yl(a)),i.g=o}else fd(i);0<n.j.length&&hd(n)}else"stop"!=h[0]&&"close"!=h[0]||wd(n,7);else 3==n.H&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?wd(n,7):od(n):"noop"!=h[0]&&n.h&&n.h.Aa(h),n.A=0)}El()}catch(h){}}function nu(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Wc(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(Wc(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}(e),i=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(Wc(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}(jc=ql.prototype).setTimeout=function(e){this.P=e},jc.nb=function(e){e=e.target;const t=this.M;t&&3==ed(e)?t.l():this.Pa(e)},jc.Pa=function(e){try{if(e==this.g)e:{const l=ed(this.g);var t=this.g.Ia();if(this.g.da(),!(3>l)&&(3!=l||mh||this.g&&(this.h.h||this.g.ja()||td(this.g)))){this.J||4!=l||7==t||El(),Xl(this);var n=this.g.da();this.ca=n;t:if(Kl(this)){var i=td(this.g);e="";var s=i.length,r=4==ed(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){eu(this),Zl(this);var o="";break t}this.h.i=new $c.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,i,s,r,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+r+" "+o}))}(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oh(a)){var h=a;break t}}h=null}if(!(n=h)){this.i=!1,this.s=3,kl(12),eu(this),Zl(this);break e}wl(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,tu(this,n)}this.S?(Gl(this,l,o),mh&&this.i&&3==l&&(_l(this.U,this.V,"tick",this.mb),this.V.start())):(wl(this.j,this.m,o,null),tu(this,o)),4==l&&eu(this),this.i&&!this.J&&(4==l?yd(this.l,this):(this.i=!1,Yl(this)))}else(function(e){const t={};e=(e.g&&2<=ed(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<e.length;i++){if(oh(e[i]))continue;var n=il(e[i]);const s=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const r=t[s]||[];t[s]=r,r.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,kl(12)):(this.s=0,kl(13)),eu(this),Zl(this)}}}catch(l){}},jc.mb=function(){if(this.g){var e=ed(this.g),t=this.g.ja();this.o<t.length&&(Xl(this),Gl(this,e,t),this.i&&4!=e&&Yl(this))}},jc.cancel=function(){this.J=!0,eu(this)},jc.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.B),2!=this.L&&(El(),kl(17)),eu(this),this.s=2,Zl(this)):Jl(this,this.Y-e)};var iu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function su(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof su){this.h=e.h,ou(this,e.j),this.s=e.s,this.g=e.g,au(this,e.m),this.l=e.l;var t=e.i,n=new vu;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),cu(this,n),this.o=e.o}else e&&(t=String(e).match(iu))?(this.h=!1,ou(this,t[1]||"",!0),this.s=uu(t[2]||""),this.g=uu(t[3]||"",!0),au(this,t[4]),this.l=uu(t[5]||"",!0),cu(this,t[6]||"",!0),this.o=uu(t[7]||"")):(this.h=!1,this.i=new vu(null,this.h))}function ru(e){return new su(e)}function ou(e,t,n){e.j=n?uu(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function au(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function cu(e,t,n){t instanceof vu?(e.i=t,function(e,t){t&&!e.j&&(wu(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Tu(this,t),bu(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=du(t,_u)),e.i=new vu(t,e.h))}function hu(e,t,n){e.i.set(t,n)}function lu(e){return hu(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function uu(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function du(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,fu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function fu(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}su.prototype.toString=function(){var e=[],t=this.j;t&&e.push(du(t,pu,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(du(t,pu,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(du(n,"/"==n.charAt(0)?mu:gu,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",du(n,yu)),e.join("")};var pu=/[#\/\?@]/g,gu=/[#\?:]/g,mu=/[#\?]/g,_u=/[#\?@]/g,yu=/#/g;function vu(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function wu(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Tu(e,t){wu(e),t=Cu(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Iu(e,t){return wu(e),t=Cu(e,t),e.g.has(t)}function bu(e,t,n){Tu(e,t),0<n.length&&(e.i=null,e.g.set(Cu(e,t),nh(n)),e.h+=n.length)}function Cu(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(jc=vu.prototype).add=function(e,t){wu(this),this.i=null,e=Cu(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},jc.forEach=function(e,t){wu(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},jc.ta=function(){wu(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let e=0;e<s.length;e++)n.push(t[i])}return n},jc.Z=function(e){wu(this);let t=[];if("string"==typeof e)Iu(this,e)&&(t=t.concat(this.g.get(Cu(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},jc.set=function(e,t){return wu(this),this.i=null,Iu(this,e=Cu(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},jc.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},jc.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;""!==o[i]&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};var Eu=class{constructor(e,t){this.g=e,this.map=t}};function Su(e){this.l=e||ku,e=$c.PerformanceNavigationTiming?0<(e=$c.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!($c.g&&$c.g.Ka&&$c.g.Ka()&&$c.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ku=10;function Nu(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Au(e){return e.h?1:e.g?e.g.size:0}function Ru(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Du(e,t){e.g?e.g.add(t):e.h=t}function Pu(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function xu(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return nh(e.i)}Su.prototype.cancel=function(){if(this.i=xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Ou=class{stringify(e){return $c.JSON.stringify(e,void 0)}parse(e){return $c.JSON.parse(e,void 0)}};function Lu(){this.g=new Ou}function Mu(e,t,n){const i=n||"";try{nu(e,(function(e,n){let s=e;Hc(e)&&(s=Zh(e)),t.push(i+n+"="+encodeURIComponent(s))}))}catch(s){throw t.push(i+"type="+encodeURIComponent("_badmap")),s}}function Fu(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch(r){}}function Uu(e){this.l=e.ec||null,this.j=e.ob||!1}function Vu(e,t){Yh.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=qu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Zc(Uu,Pl),Uu.prototype.g=function(){return new Vu(this.l,this.j)},Uu.prototype.i=function(e){return function(){return e}}({}),Zc(Vu,Yh);var qu=0;function ju(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function Bu(e){e.readyState=4,e.l=null,e.j=null,e.A=null,zu(e)}function zu(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(jc=Vu.prototype).open=function(e,t){if(this.readyState!=qu)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,zu(this)},jc.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||$c).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},jc.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Bu(this)),this.readyState=qu},jc.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,zu(this)),this.g&&(this.readyState=3,zu(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==$c.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ju(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},jc.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Bu(this):zu(this),3==this.readyState&&ju(this)}},jc.Za=function(e){this.g&&(this.response=this.responseText=e,Bu(this))},jc.Ya=function(e){this.g&&(this.response=e,Bu(this))},jc.ka=function(){this.g&&Bu(this)},jc.setRequestHeader=function(e,t){this.v.append(e,t)},jc.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},jc.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Vu.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var $u=$c.JSON.parse;function Wu(e){Yh.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Hu,this.L=this.M=!1}Zc(Wu,Yh);var Hu="",Ku=/^https?$/i,Gu=["POST","PUT"];function Qu(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Yu(e),Xu(e)}function Yu(e){e.F||(e.F=!0,Jh(e,"complete"),Jh(e,"error"))}function Ju(e){if(e.h&&void 0!==zc&&(!e.C[1]||4!=ed(e)||2!=e.da()))if(e.v&&4==ed(e))dl(e.La,0,e);else if(Jh(e,"readystatechange"),4==ed(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var s=String(e.I).match(iu)[1]||null;!s&&$c.self&&$c.self.location&&(s=$c.self.location.protocol.slice(0,-1)),i=!Ku.test(s?s.toLowerCase():"")}n=i}if(n)Jh(e,"complete"),Jh(e,"success");else{e.m=6;try{var r=2<ed(e)?e.g.statusText:""}catch(o){r=""}e.j=r+" ["+e.da()+"]",Yu(e)}}finally{Xu(e)}}}function Xu(e,t){if(e.g){Zu(e);const i=e.g,s=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Jh(e,"ready");try{i.onreadystatechange=s}catch(n){}}}function Zu(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&($c.clearTimeout(e.A),e.A=null)}function ed(e){return e.g?e.g.readyState:0}function td(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Hu:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(cf){return null}}function nd(e){let t="";return Dh(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function id(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=nd(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):hu(e,t,n))}function sd(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function rd(e){this.Ga=0,this.j=[],this.l=new vl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=sd("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=sd("baseRetryDelayMs",5e3,e),this.hb=sd("retryDelaySeedMs",1e4,e),this.eb=sd("forwardChannelMaxRetries",2,e),this.xa=sd("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Su(e&&e.concurrentRequestLimit),this.Ja=new Lu,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function od(e){if(cd(e),3==e.H){var t=e.W++,n=ru(e.I);if(hu(n,"SID",e.K),hu(n,"RID",t),hu(n,"TYPE","terminate"),ud(e,n),(t=new ql(e,e.l,t)).L=2,t.A=lu(ru(n)),n=!1,$c.navigator&&$c.navigator.sendBeacon)try{n=$c.navigator.sendBeacon(t.A.toString(),"")}catch(i){}!n&&$c.Image&&((new Image).src=t.A,n=!0),n||(t.g=bd(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Yl(t)}Td(e)}function ad(e){e.g&&(gd(e),e.g.cancel(),e.g=null)}function cd(e){ad(e),e.u&&($c.clearTimeout(e.u),e.u=null),_d(e),e.i.cancel(),e.m&&("number"==typeof e.m&&$c.clearTimeout(e.m),e.m=null)}function hd(e){if(!Nu(e.i)&&!e.m){e.m=!0;var t=e.Na;rl||cl(),ol||(rl(),ol=!0),al.add(t,e),e.C=0}}function ld(e,t){var n;n=t?t.m:e.W++;const i=ru(e.I);hu(i,"SID",e.K),hu(i,"RID",n),hu(i,"AID",e.V),ud(e,i),e.o&&e.s&&id(i,e.o,e.s),n=new ql(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=dd(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Du(e.i,n),Wl(n,i,t)}function ud(e,t){e.na&&Dh(e.na,(function(e,n){hu(t,n,e)})),e.h&&nu({},(function(e,n){hu(t,n,e)}))}function dd(e,t,n){n=Math.min(e.j.length,n);var i=e.h?Jc(e.h.Va,e.h,e):null;e:{var s=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=s[a].g;const c=s[a].map;if(n-=t,0>n)t=Math.max(0,s[a].g-100),o=!1;else try{Mu(c,e,"req"+n+"_")}catch(r){i&&i(c)}}if(o){i=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,i}function fd(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;rl||cl(),ol||(rl(),ol=!0),al.add(t,e),e.A=0}}function pd(e){return!(e.g||e.u||3<=e.A||(e.ba++,e.u=Al(Jc(e.Ma,e),vd(e,e.A)),e.A++,0))}function gd(e){null!=e.B&&($c.clearTimeout(e.B),e.B=null)}function md(e){e.g=new ql(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=ru(e.wa);hu(t,"RID","rpc"),hu(t,"SID",e.K),hu(t,"AID",e.V),hu(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&hu(t,"TO",e.qa),hu(t,"TYPE","xmlhttp"),ud(e,t),e.o&&e.s&&id(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=lu(ru(t)),n.u=null,n.S=!0,Hl(n,e)}function _d(e){null!=e.v&&($c.clearTimeout(e.v),e.v=null)}function yd(e,t){var n=null;if(e.g==t){_d(e),gd(e),e.g=null;var i=2}else{if(!Ru(e.i,t))return;n=t.F,Pu(e.i,t),i=1}if(0!=e.H)if(t.i)if(1==i){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;Jh(i=bl(),new Nl(i,n)),hd(e)}else fd(e);else if(3==(s=t.s)||0==s&&0<t.ca||!(1==i&&function(e,t){return!(Au(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.j=t.F.concat(e.j),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=Al(Jc(e.Na,e,t),vd(e,e.C)),e.C++,0)))}(e,t)||2==i&&pd(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:wd(e,5);break;case 4:wd(e,10);break;case 3:wd(e,6);break;default:wd(e,2)}}function vd(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function wd(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var i=Jc(e.pb,e);n||(n=new su("//www.google.com/images/cleardot.gif"),$c.location&&"http"==$c.location.protocol||ou(n,"https"),lu(n)),function(e,t){const n=new vl;if($c.Image){const i=new Image;i.onload=Xc(Fu,n,i,"TestLoadImage: loaded",!0,t),i.onerror=Xc(Fu,n,i,"TestLoadImage: error",!1,t),i.onabort=Xc(Fu,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=Xc(Fu,n,i,"TestLoadImage: timeout",!1,t),$c.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else kl(2);e.H=0,e.h&&e.h.za(t),Td(e),cd(e)}function Td(e){if(e.H=0,e.ma=[],e.h){const t=xu(e.i);0==t.length&&0==e.j.length||(ih(e.ma,t),ih(e.ma,e.j),e.i.i.length=0,nh(e.j),e.j.length=0),e.h.ya()}}function Id(e,t,n){var i=n instanceof su?ru(n):new su(n);if(""!=i.g)t&&(i.g=t+"."+i.g),au(i,i.m);else{var s=$c.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new su(null);i&&ou(r,i),t&&(r.g=t),s&&au(r,s),n&&(r.l=n),i=r}return n=e.F,t=e.Da,n&&t&&hu(i,n,t),hu(i,"VER",e.ra),ud(e,i),i}function bd(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ha&&!e.va?new Wu(new Uu({ob:n})):new Wu(e.va)).Oa(e.J),t}function Cd(){}function Ed(){if(ph&&!(10<=Number(Ch)))throw Error("Environmental error: no available transport.")}function Sd(e,t){Yh.call(this),this.g=new rd(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!oh(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!oh(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new Ad(this)}function kd(e){Fl.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Nd(){Ul.call(this),this.status=1}function Ad(e){this.g=e}function Rd(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Dd(e,t,n){n||(n=0);var i=Array(16);if("string"==typeof t)for(var s=0;16>s;++s)i[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var r=e.g[3],o=t+(r^n&(s^r))+i[0]+3614090360&4294967295;o=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=n+(o<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^r&(n^s))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^s^r)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(s^(n|~r))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~r))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~r))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((r=(t=n+((o=t+(s^(n|~r))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((s=r+((o=s+(t^(r|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+r&4294967295}function Pd(e,t){this.h=t;for(var n=[],i=!0,s=e.length-1;0<=s;s--){var r=0|e[s];i&&r==t||(n[s]=r,i=!1)}this.g=n}(jc=Wu.prototype).Oa=function(e){this.M=e},jc.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ll.g(),this.C=this.u?xl(this.u):xl(Ll),this.g.onreadystatechange=Jc(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(r){return void Qu(this,r)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=$c.FormData&&e instanceof $c.FormData,!(0<=th(Gu,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Zu(this),0<this.B&&((this.L=function(e){return ph&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Jc(this.ua,this)):this.A=dl(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Qu(this,r)}},jc.ua=function(){void 0!==zc&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Jh(this,"timeout"),this.abort(8))},jc.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Jh(this,"complete"),Jh(this,"abort"),Xu(this))},jc.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xu(this,!0)),Wu.$.N.call(this)},jc.La=function(){this.s||(this.G||this.v||this.l?Ju(this):this.kb())},jc.kb=function(){Ju(this)},jc.isActive=function(){return!!this.g},jc.da=function(){try{return 2<ed(this)?this.g.status:-1}catch(uh){return-1}},jc.ja=function(){try{return this.g?this.g.responseText:""}catch(uh){return""}},jc.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),$u(t)}},jc.Ia=function(){return this.m},jc.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(jc=rd.prototype).ra=8,jc.H=1,jc.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new ql(this,this.l,e);let r=this.s;if(this.U&&(r?(r=Ph(r),Oh(r,this.U)):r=this.U),null!==this.o||this.O||(s.I=r,r=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var i=this.j[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=dd(this,s,t),hu(n=ru(this.I),"RID",e),hu(n,"CVER",22),this.F&&hu(n,"X-HTTP-Session-Id",this.F),ud(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(nd(r)))+"&"+t:this.o&&id(n,this.o,r)),Du(this.i,s),this.bb&&hu(n,"TYPE","init"),this.P?(hu(n,"$req",t),hu(n,"SID","null"),s.aa=!0,Wl(s,n,null)):Wl(s,n,t),this.H=2}}else 3==this.H&&(e?ld(this,e):0==this.j.length||Nu(this.i)||ld(this))},jc.Ma=function(){if(this.u=null,md(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Al(Jc(this.jb,this),e)}},jc.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,kl(10),ad(this),md(this))},jc.ib=function(){null!=this.v&&(this.v=null,ad(this),pd(this),kl(19))},jc.pb=function(e){e?(this.l.info("Successfully pinged google.com"),kl(2)):(this.l.info("Failed to ping google.com"),kl(1))},jc.isActive=function(){return!!this.h&&this.h.isActive(this)},(jc=Cd.prototype).Ba=function(){},jc.Aa=function(){},jc.za=function(){},jc.ya=function(){},jc.isActive=function(){return!0},jc.Va=function(){},Ed.prototype.g=function(e,t){return new Sd(e,t)},Zc(Sd,Yh),Sd.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;kl(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Id(e,null,e.Y),hd(e)},Sd.prototype.close=function(){od(this.g)},Sd.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Zh(e),e=n);t.j.push(new Eu(t.fb++,e)),3==t.H&&hd(t)},Sd.prototype.N=function(){this.g.h=null,delete this.j,od(this.g),delete this.g,Sd.$.N.call(this)},Zc(kd,Fl),Zc(Nd,Ul),Zc(Ad,Cd),Ad.prototype.Ba=function(){Jh(this.g,"a")},Ad.prototype.Aa=function(e){Jh(this.g,new kd(e))},Ad.prototype.za=function(e){Jh(this.g,new Nd)},Ad.prototype.ya=function(){Jh(this.g,"b")},Zc(Rd,(function(){this.blockSize=-1})),Rd.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Rd.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=this.m,s=this.h,r=0;r<t;){if(0==s)for(;r<=n;)Dd(this,e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s++]=e.charCodeAt(r++),s==this.blockSize){Dd(this,i),s=0;break}}else for(;r<t;)if(i[s++]=e[r++],s==this.blockSize){Dd(this,i),s=0;break}}this.h=s,this.i+=t},Rd.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};var xd={};function Od(e){return-128<=e&&128>e?function(e,t){var n=xd;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new Pd([0|e],0>e?-1:0)})):new Pd([0|e],0>e?-1:0)}function Ld(e){if(isNaN(e)||!isFinite(e))return Fd;if(0>e)return Bd(Ld(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=Md;return new Pd(t,0)}var Md=4294967296,Fd=Od(0),Ud=Od(1),Vd=Od(16777216);function qd(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function jd(e){return-1==e.h}function Bd(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new Pd(n,~e.h).add(Ud)}function zd(e,t){return e.add(Bd(t))}function $d(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Wd(e,t){this.g=e,this.h=t}function Hd(e,t){if(qd(t))throw Error("division by zero");if(qd(e))return new Wd(Fd,Fd);if(jd(e))return t=Hd(Bd(e),t),new Wd(Bd(t.g),Bd(t.h));if(jd(t))return t=Hd(e,Bd(t)),new Wd(Bd(t.g),t.h);if(30<e.g.length){if(jd(e)||jd(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ud,i=t;0>=i.X(e);)n=Kd(n),i=Kd(i);var s=Gd(n,1),r=Gd(i,1);for(i=Gd(i,2),n=Gd(n,2);!qd(i);){var o=r.add(i);0>=o.X(e)&&(s=s.add(n),r=o),i=Gd(i,1),n=Gd(n,1)}return t=zd(e,s.R(t)),new Wd(s,t)}for(s=Fd;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),o=(r=Ld(n)).R(t);jd(o)||0<o.X(e);)o=(r=Ld(n-=i)).R(t);qd(r)&&(r=Ud),s=s.add(r),e=zd(e,o)}return new Wd(s,e)}function Kd(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new Pd(n,e.h)}function Gd(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],r=0;r<i;r++)s[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new Pd(s,e.h)}(jc=Pd.prototype).ea=function(){if(jd(this))return-Bd(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:Md+i)*t,t*=Md}return e},jc.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(qd(this))return"0";if(jd(this))return"-"+Bd(this).toString(e);for(var t=Ld(Math.pow(e,6)),n=this,i="";;){var s=Hd(n,t).g,r=((0<(n=zd(n,s.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(qd(n=s))return r+i;for(;6>r.length;)r="0"+r;i=r+i}},jc.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},jc.X=function(e){return jd(e=zd(this,e))?-1:qd(e)?0:1},jc.abs=function(){return jd(this)?Bd(this):this},jc.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var r=i+(65535&this.D(s))+(65535&e.D(s)),o=(r>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new Pd(n,-2147483648&n[n.length-1]?-1:0)},jc.R=function(e){if(qd(this)||qd(e))return Fd;if(jd(this))return jd(e)?Bd(this).R(Bd(e)):Bd(Bd(this).R(e));if(jd(e))return Bd(this.R(Bd(e)));if(0>this.X(Vd)&&0>e.X(Vd))return Ld(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var r=this.D(i)>>>16,o=65535&this.D(i),a=e.D(s)>>>16,c=65535&e.D(s);n[2*i+2*s]+=o*c,$d(n,2*i+2*s),n[2*i+2*s+1]+=r*c,$d(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,$d(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,$d(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new Pd(n,0)},jc.gb=function(e){return Hd(this,e).h},jc.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new Pd(n,this.h&e.h)},jc.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new Pd(n,this.h|e.h)},jc.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new Pd(n,this.h^e.h)},Ed.prototype.createWebChannel=Ed.prototype.g,Sd.prototype.send=Sd.prototype.u,Sd.prototype.open=Sd.prototype.m,Sd.prototype.close=Sd.prototype.close,Rl.NO_ERROR=0,Rl.TIMEOUT=8,Rl.HTTP_ERROR=6,Dl.COMPLETE="complete",Ol.EventType=Ml,Ml.OPEN="a",Ml.CLOSE="b",Ml.ERROR="c",Ml.MESSAGE="d",Yh.prototype.listen=Yh.prototype.O,Wu.prototype.listenOnce=Wu.prototype.P,Wu.prototype.getLastError=Wu.prototype.Sa,Wu.prototype.getLastErrorCode=Wu.prototype.Ia,Wu.prototype.getStatus=Wu.prototype.da,Wu.prototype.getResponseJson=Wu.prototype.Wa,Wu.prototype.getResponseText=Wu.prototype.ja,Wu.prototype.send=Wu.prototype.ha,Wu.prototype.setWithCredentials=Wu.prototype.Oa,Rd.prototype.digest=Rd.prototype.l,Rd.prototype.reset=Rd.prototype.reset,Rd.prototype.update=Rd.prototype.j,Pd.prototype.add=Pd.prototype.add,Pd.prototype.multiply=Pd.prototype.R,Pd.prototype.modulo=Pd.prototype.gb,Pd.prototype.compare=Pd.prototype.X,Pd.prototype.toNumber=Pd.prototype.ea,Pd.prototype.toString=Pd.prototype.toString,Pd.prototype.getBits=Pd.prototype.D,Pd.fromNumber=Ld,Pd.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return Bd(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=Ld(Math.pow(n,8)),s=Fd,r=0;r<t.length;r+=8){var o=Math.min(8,t.length-r),a=parseInt(t.substring(r,r+o),n);8>o?(o=Ld(Math.pow(n,o)),s=s.R(o).add(Ld(a))):s=(s=s.R(i)).add(Ld(a))}return s};var Qd=Rl,Yd=Dl,Jd=Tl,Xd=10,Zd=11,ef=Ol,tf=Wu,nf=Rd,sf=Pd;const rf="@firebase/firestore";
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class of{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}of.UNAUTHENTICATED=new of(null),of.GOOGLE_CREDENTIALS=new of("google-credentials-uid"),of.FIRST_PARTY=new of("first-party-uid"),of.MOCK_USER=new of("mock-user");
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
let af="10.8.0";
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const cf=new se("@firebase/firestore");function hf(){return cf.logLevel}function lf(e,...t){if(cf.logLevel<=Z.DEBUG){const n=t.map(ff);cf.debug(`Firestore (${af}): ${e}`,...n)}}function uf(e,...t){if(cf.logLevel<=Z.ERROR){const n=t.map(ff);cf.error(`Firestore (${af}): ${e}`,...n)}}function df(e,...t){if(cf.logLevel<=Z.WARN){const n=t.map(ff);cf.warn(`Firestore (${af}): ${e}`,...n)}}function ff(e){if("string"==typeof e)return e;try{
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function pf(e="Unexpected state"){const t=`FIRESTORE (${af}) INTERNAL ASSERTION FAILED: `+e;throw uf(t),new Error(t)}function gf(e,t){e||pf()}function mf(e,t){return e}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const _f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class yf extends R{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class vf{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class wf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Tf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(of.UNAUTHENTICATED)))}shutdown(){}}class If{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class bf{constructor(e){this.t=e,this.currentUser=of.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new vf;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vf,e.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{lf("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(lf("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vf)}}),0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(lf("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(gf("string"==typeof t.accessToken),new wf(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return gf(null===e||"string"==typeof e),new of(e)}}class Cf{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=of.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ef{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new Cf(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(of.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Sf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kf{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&lf("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,lf("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{lf("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?i(e):lf("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(gf("string"==typeof e.token),this.R=e.token,new Sf(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Nf(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Af{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const i=Nf(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%62))}return n}}function Rf(e,t){return e<t?-1:e>t?1:0}function Df(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Pf{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new yf(_f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new yf(_f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new yf(_f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new yf(_f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Pf.fromMillis(Date.now())}static fromDate(e){return Pf.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Pf(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Rf(this.nanoseconds,e.nanoseconds):Rf(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class xf{constructor(e){this.timestamp=e}static fromTimestamp(e){return new xf(e)}static min(){return new xf(new Pf(0,0))}static max(){return new xf(new Pf(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Of{constructor(e,t,n){void 0===t?t=0:t>e.length&&pf(),void 0===n?n=e.length-t:n>e.length-t&&pf(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Of.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Of?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),s=t.get(i);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Lf extends Of{construct(e,t,n){return new Lf(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new yf(_f.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Lf(t)}static emptyPath(){return new Lf([])}}const Mf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ff extends Of{construct(e,t,n){return new Ff(e,t,n)}static isValidIdentifier(e){return Mf.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ff.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ff(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(0===n.length)throw new yf(_f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let r=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new yf(_f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new yf(_f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(r=!r,i++):"."!==t||r?(n+=t,i++):(s(),i++)}if(s(),r)throw new yf(_f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ff(t)}static emptyPath(){return new Ff([])}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Uf{constructor(e){this.path=e}static fromPath(e){return new Uf(Lf.fromString(e))}static fromName(e){return new Uf(Lf.fromString(e).popFirst(5))}static empty(){return new Uf(Lf.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Lf.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Lf.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Uf(new Lf(e.slice()))}}function Vf(e){return new qf(e.readTime,e.key,-1)}class qf{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new qf(xf.min(),Uf.empty(),-1)}static max(){return new qf(xf.max(),Uf.empty(),-1)}}function jf(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Uf.comparator(e.documentKey,t.documentKey),0!==n?n:Rf(e.largestBatchId,t.largestBatchId)
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */)}const Bf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */async function $f(e){if(e.code!==_f.FAILED_PRECONDITION||e.message!==Bf)throw e;lf("LocalStore","Unexpectedly lost primary lease")}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Wf{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&pf(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Wf(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Wf?t:Wf.resolve(t)}catch(e){return Wf.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Wf.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Wf.reject(t)}static resolve(e){return new Wf(((t,n)=>{t(e)}))}static reject(e){return new Wf(((t,n)=>{n(e)}))}static waitFor(e){return new Wf(((t,n)=>{let i=0,s=0,r=!1;e.forEach((e=>{++i,e.next((()=>{++s,r&&s===i&&t()}),(e=>n(e)))})),r=!0,s===i&&t()}))}static or(e){let t=Wf.resolve(!1);for(const n of e)t=t.next((e=>e?Wf.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new Wf(((n,i)=>{const s=e.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;t(e[c]).next((e=>{r[c]=e,++o,o===s&&n(r)}),(e=>i(e)))}}))}static doWhile(e,t){return new Wf(((n,i)=>{const s=()=>{!0===e()?t().next((()=>{s()}),i):n()};s()}))}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Hf{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new vf,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Qf(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{const n=ep(t.target.error);this.V.reject(new Qf(e,n))}}static open(e,t,n,i){try{return new Hf(t,e.transaction(i,n))}catch(e){throw new Qf(t,e)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(lf("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Jf(t)}}class Kf{constructor(e,t,n){this.name=e,this.version=t,this.p=n,12.2===Kf.S(C())&&uf("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return lf("SimpleDb","Removing database:",e),Xf(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!A())return!1;if(Kf.C())return!0;const e=C(),t=Kf.S(e),n=0<t&&t<10,i=Kf.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static C(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.__PRIVATE_env)||void 0===e?void 0:e.F)}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static v(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async O(e){return this.db||(lf("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=e=>{const n=e.target.result;t(n)},i.onblocked=()=>{n(new Qf(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=t=>{const i=t.target.error;"VersionError"===i.name?n(new yf(_f.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===i.name?n(new yf(_f.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i)):n(new Qf(e,i))},i.onupgradeneeded=e=>{lf("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.p.N(t,i.transaction,e.oldVersion,this.version).next((()=>{lf("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const s="readonly"===t;let r=0;for(;;){++r;try{this.db=await this.O(e);const t=Hf.open(this.db,e,s?"readonly":"readwrite",n),r=i(t).next((e=>(t.g(),e))).catch((e=>(t.abort(e),Wf.reject(e)))).toPromise();return r.catch((()=>{})),await t.m,r}catch(e){const t=e,n="FirebaseError"!==t.name&&r<3;if(lf("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Gf{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Xf(this.k.delete())}}class Qf extends yf{constructor(e,t){super(_f.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Yf(e){return"IndexedDbTransactionError"===e.name}class Jf{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(lf("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(lf("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Xf(n)}add(e){return lf("SimpleDb","ADD",this.store.name,e,e),Xf(this.store.add(e))}get(e){return Xf(this.store.get(e)).next((t=>(void 0===t&&(t=null),lf("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return lf("SimpleDb","DELETE",this.store.name,e),Xf(this.store.delete(e))}count(){return lf("SimpleDb","COUNT",this.store.name),Xf(this.store.count())}W(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if("function"==typeof i.getAll){const e=i.getAll(n.range);return new Wf(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}{const e=this.cursor(n),t=[];return this.G(e,((e,n)=>{t.push(n)})).next((()=>t))}}j(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Wf(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}H(e,t){lf("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.J=!1;const i=this.cursor(n);return this.G(i,((e,t,n)=>n.delete()))}Y(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.G(i,t)}Z(e){const t=this.cursor({});return new Wf(((n,i)=>{t.onerror=e=>{const t=ep(e.target.error);i(t)},t.onsuccess=t=>{const i=t.target.result;i?e(i.primaryKey,i.value).next((e=>{e?i.continue():n()})):n()}}))}G(e,t){const n=[];return new Wf(((i,s)=>{e.onerror=e=>{s(e.target.error)},e.onsuccess=e=>{const s=e.target.result;if(!s)return void i();const r=new Gf(s),o=t(s.primaryKey,s.value,r);if(o instanceof Wf){const e=o.catch((e=>(r.done(),Wf.reject(e))));n.push(e)}r.isDone?i():null===r.$?s.continue():s.continue(r.$)}})).next((()=>Wf.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.J?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Xf(e){return new Wf(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=ep(e.target.error);n(t)}}))}let Zf=!1;function ep(e){const t=Kf.S(C());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new yf("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Zf||(Zf=!0,setTimeout((()=>{throw e}),0)),e}}return e}
/**
             * @license
             * Copyright 2018 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class tp{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}function np(e){return null==e}function ip(e){return 0===e&&1/e==-1/0}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function sp(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function rp(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function op(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */tp._e=-1;class ap{constructor(e,t){this.comparator=e,this.root=t||hp.EMPTY}insert(e,t){return new ap(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,hp.BLACK,null,null))}remove(e){return new ap(this.comparator,this.root.remove(e,this.comparator).copy(null,null,hp.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cp(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cp(this.root,e,this.comparator,!1)}getReverseIterator(){return new cp(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cp(this.root,e,this.comparator,!0)}}class cp{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class hp{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:hp.RED,this.left=null!=i?i:hp.EMPTY,this.right=null!=s?s:hp.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new hp(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return hp.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return hp.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,hp.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,hp.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pf();if(this.right.isRed())throw pf();const e=this.left.check();if(e!==this.right.check())throw pf();return e+(this.isRed()?0:1)}}hp.EMPTY=null,hp.RED=!0,hp.BLACK=!1,hp.EMPTY=new class{constructor(){this.size=0}get key(){throw pf()}get value(){throw pf()}get color(){throw pf()}get left(){throw pf()}get right(){throw pf()}copy(e,t,n,i,s){return this}insert(e,t,n){return new hp(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class lp{constructor(e){this.comparator=e,this.data=new ap(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new up(this.data.getIterator())}getIteratorFrom(e){return new up(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof lp))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new lp(this.comparator);return t.data=e,t}}class up{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class dp{constructor(e){this.fields=e,e.sort(Ff.comparator)}static empty(){return new dp([])}unionWith(e){let t=new lp(Ff.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new dp(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Df(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
             * @license
             * Copyright 2023 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class fp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class pp{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new fp("Invalid base64 string: "+e):e}}(e);return new pp(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new pp(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Rf(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pp.EMPTY_BYTE_STRING=new pp("");const gp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mp(e){if(gf(!!e),"string"==typeof e){let t=0;const n=gp.exec(e);if(gf(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:_p(e.seconds),nanos:_p(e.nanos)}}function _p(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function yp(e){return"string"==typeof e?pp.fromBase64String(e):pp.fromUint8Array(e)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function vp(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function wp(e){const t=e.mapValue.fields.__previous_value__;return vp(t)?wp(t):t}function Tp(e){const t=mp(e.mapValue.fields.__local_write_time__.timestampValue);return new Pf(t.seconds,t.nanos)}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Ip{constructor(e,t,n,i,s,r,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class bp{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new bp("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof bp&&e.projectId===this.projectId&&e.database===this.database}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Cp={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ep(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?vp(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e)?9007199254740991:10:pf()}function Sp(e,t){if(e===t)return!0;const n=Ep(e);if(n!==Ep(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Tp(e).isEqual(Tp(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=mp(e.timestampValue),i=mp(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return yp(e.bytesValue).isEqual(yp(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return _p(e.geoPointValue.latitude)===_p(t.geoPointValue.latitude)&&_p(e.geoPointValue.longitude)===_p(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return _p(e.integerValue)===_p(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=_p(e.doubleValue),i=_p(t.doubleValue);return n===i?ip(n)===ip(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return Df(e.arrayValue.values||[],t.arrayValue.values||[],Sp);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(sp(n)!==sp(i))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===i[s]||!Sp(n[s],i[s])))return!1;return!0}(e,t);default:return pf()}}function kp(e,t){return void 0!==(e.values||[]).find((e=>Sp(e,t)))}function Np(e,t){if(e===t)return 0;const n=Ep(e),i=Ep(t);if(n!==i)return Rf(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Rf(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=_p(e.integerValue||e.doubleValue),i=_p(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return Ap(e.timestampValue,t.timestampValue);case 4:return Ap(Tp(e),Tp(t));case 5:return Rf(e.stringValue,t.stringValue);case 6:return function(e,t){const n=yp(e),i=yp(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let s=0;s<n.length&&s<i.length;s++){const e=Rf(n[s],i[s]);if(0!==e)return e}return Rf(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Rf(_p(e.latitude),_p(t.latitude));return 0!==n?n:Rf(_p(e.longitude),_p(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let s=0;s<n.length&&s<i.length;++s){const e=Np(n[s],i[s]);if(e)return e}return Rf(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Cp.mapValue&&t===Cp.mapValue)return 0;if(e===Cp.mapValue)return 1;if(t===Cp.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),s=t.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let o=0;o<i.length&&o<r.length;++o){const e=Rf(i[o],r[o]);if(0!==e)return e;const t=Np(n[i[o]],s[r[o]]);if(0!==t)return t}return Rf(i.length,r.length)}(e.mapValue,t.mapValue);default:throw pf()}}function Ap(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Rf(e,t);const n=mp(e),i=mp(t),s=Rf(n.seconds,i.seconds);return 0!==s?s:Rf(n.nanos,i.nanos)}function Rp(e){return Dp(e)}function Dp(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=mp(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return yp(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return Uf.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=Dp(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const s of t)i?i=!1:n+=",",n+=`${s}:${Dp(e.fields[s])}`;return n+"}"}(e.mapValue):pf()}function Pp(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function xp(e){return!!e&&"integerValue"in e}function Op(e){return!!e&&"arrayValue"in e}function Lp(e){return!!e&&"nullValue"in e}function Mp(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Fp(e){return!!e&&"mapValue"in e}function Up(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return rp(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Up(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Up(e.arrayValue.values[n]);return t}return Object.assign({},e)}class Vp{constructor(e){this.value=e}static empty(){return new Vp({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Fp(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Up(t)}setAll(e){let t=Ff.emptyPath(),n={},i=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=s.popLast()}e?n[s.lastSegment()]=Up(e):i.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());Fp(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Sp(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Fp(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){rp(t,((t,n)=>e[t]=n));for(const i of n)delete e[i]}clone(){return new Vp(Up(this.value))}}function qp(e){const t=[];return rp(e.fields,((e,n)=>{const i=new Ff([e]);if(Fp(n)){const e=qp(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new dp(t)
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */}class jp{constructor(e,t,n,i,s,r,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=r,this.documentState=o}static newInvalidDocument(e){return new jp(e,0,xf.min(),xf.min(),xf.min(),Vp.empty(),0)}static newFoundDocument(e,t,n,i){return new jp(e,1,t,xf.min(),n,i,0)}static newNoDocument(e,t){return new jp(e,2,t,xf.min(),xf.min(),Vp.empty(),0)}static newUnknownDocument(e,t){return new jp(e,3,t,xf.min(),xf.min(),Vp.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(xf.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vp.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vp.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=xf.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof jp&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jp(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Bp{constructor(e,t){this.position=e,this.inclusive=t}}function zp(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],o=e.position[s];if(i=r.field.isKeyField()?Uf.comparator(Uf.fromName(o.referenceValue),n.key):Np(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function $p(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Sp(e.position[n],t.position[n]))return!1;return!0}
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Wp{constructor(e,t="asc"){this.field=e,this.dir=t}}function Hp(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Kp{}class Gp extends Kp{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new tg(e,t,n):"array-contains"===t?new rg(e,n):"in"===t?new og(e,n):"not-in"===t?new ag(e,n):"array-contains-any"===t?new cg(e,n):new Gp(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ng(e,n):new ig(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Np(t,this.value)):null!==t&&Ep(this.value)===Ep(t)&&this.matchesComparison(Np(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return pf()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qp extends Kp{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new Qp(e,t)}matches(e){return Yp(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Yp(e){return"and"===e.op}function Jp(e){return function(e){for(const t of e.filters)if(t instanceof Qp)return!1;return!0}(e)&&Yp(e)}function Xp(e){if(e instanceof Gp)return e.field.canonicalString()+e.op.toString()+Rp(e.value);if(Jp(e))return e.filters.map((e=>Xp(e))).join(",");{const t=e.filters.map((e=>Xp(e))).join(",");return`${e.op}(${t})`}}function Zp(e,t){return e instanceof Gp?function(e,t){return t instanceof Gp&&e.op===t.op&&e.field.isEqual(t.field)&&Sp(e.value,t.value)}(e,t):e instanceof Qp?function(e,t){return t instanceof Qp&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,i)=>e&&Zp(n,t.filters[i])),!0)}(e,t):void pf()}function eg(e){return e instanceof Gp?function(e){return`${e.field.canonicalString()} ${e.op} ${Rp(e.value)}`}(e):e instanceof Qp?function(e){return e.op.toString()+" {"+e.getFilters().map(eg).join(" ,")+"}"}(e):"Filter"}class tg extends Gp{constructor(e,t,n){super(e,t,n),this.key=Uf.fromName(n.referenceValue)}matches(e){const t=Uf.comparator(e.key,this.key);return this.matchesComparison(t)}}class ng extends Gp{constructor(e,t){super(e,"in",t),this.keys=sg(0,t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ig extends Gp{constructor(e,t){super(e,"not-in",t),this.keys=sg(0,t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function sg(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Uf.fromName(e.referenceValue)))}class rg extends Gp{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Op(t)&&kp(t.arrayValue,this.value)}}class og extends Gp{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&kp(this.value.arrayValue,t)}}class ag extends Gp{constructor(e,t){super(e,"not-in",t)}matches(e){if(kp(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!kp(this.value.arrayValue,t)}}class cg extends Gp{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Op(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>kp(this.value.arrayValue,e)))}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class hg{constructor(e,t=null,n=[],i=[],s=null,r=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.ce=null}}function lg(e,t=null,n=[],i=[],s=null,r=null,o=null){return new hg(e,t,n,i,s,r,o)}function ug(e){const t=mf(e);if(null===t.ce){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Xp(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),np(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Rp(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Rp(e))).join(",")),t.ce=e}return t.ce}function dg(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Hp(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Zp(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!$p(e.startAt,t.startAt)&&$p(e.endAt,t.endAt)}function fg(e){return Uf.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class pg{constructor(e,t=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function gg(e){return new pg(e)}function mg(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function _g(e){return null!==e.collectionGroup}function yg(e){const t=mf(e);if(null===t.le){t.le=[];const e=new Set;for(const s of t.explicitOrderBy)t.le.push(s),e.add(s.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",i=function(e){let t=new lp(Ff.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);i.forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.le.push(new Wp(i,n))})),e.has(Ff.keyField().canonicalString())||t.le.push(new Wp(Ff.keyField(),n))}return t.le}function vg(e){const t=mf(e);return t.he||(t.he=function(e,t){if("F"===e.limitType)return lg(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new Wp(e.field,t)}));const n=e.endAt?new Bp(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Bp(e.startAt.position,e.startAt.inclusive):null;return lg(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}(t,yg(e))),t.he}function wg(e,t){const n=e.filters.concat([t]);return new pg(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Tg(e,t,n){return new pg(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ig(e,t){return dg(vg(e),vg(t))&&e.limitType===t.limitType}function bg(e){return`${ug(vg(e))}|lt:${e.limitType}`}function Cg(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>eg(e))).join(", ")}]`),np(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Rp(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Rp(e))).join(",")),`Target(${t})`}(vg(e))}; limitType=${e.limitType})`}function Eg(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Uf.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of yg(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const i=zp(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,yg(e),t)||e.endAt&&!function(e,t,n){const i=zp(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,yg(e),t))}(e,t)}function Sg(e){return(t,n)=>{let i=!1;for(const s of yg(e)){const e=kg(s,t,n);if(0!==e)return e;i=i||s.field.isKeyField()}return 0}}function kg(e,t,n){const i=e.field.isKeyField()?Uf.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),s=n.data.field(e);return null!==i&&null!==s?Np(i,s):pf()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return pf()}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Ng{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[i,s]of n)if(this.equalsFn(i,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){rp(this.inner,((t,n)=>{for(const[i,s]of n)e(i,s)}))}isEmpty(){return op(this.inner)}size(){return this.innerSize}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Ag=new ap(Uf.comparator);function Rg(){return Ag}const Dg=new ap(Uf.comparator);function Pg(...e){let t=Dg;for(const n of e)t=t.insert(n.key,n);return t}function xg(e){let t=Dg;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Og(){return Mg()}function Lg(){return Mg()}function Mg(){return new Ng((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Fg=new ap(Uf.comparator),Ug=new lp(Uf.comparator);function Vg(...e){let t=Ug;for(const n of e)t=t.add(n);return t}const qg=new lp(Rf);
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function jg(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ip(t)?"-0":t}}function Bg(e){return{integerValue:""+e}}function zg(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!ip(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?Bg(t):jg(e,t)}
/**
             * @license
             * Copyright 2018 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class $g{constructor(){this._=void 0}}function Wg(e,t,n){return e instanceof Gg?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&vp(t)&&(t=wp(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Qg?Yg(e,t):e instanceof Jg?Xg(e,t):function(e,t){const n=Kg(e,t),i=em(n)+em(e.Ie);return xp(n)&&xp(e.Ie)?Bg(i):jg(e.serializer,i)}(e,t)}function Hg(e,t,n){return e instanceof Qg?Yg(e,t):e instanceof Jg?Xg(e,t):n}function Kg(e,t){return e instanceof Zg?function(e){return xp(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class Gg extends $g{}class Qg extends $g{constructor(e){super(),this.elements=e}}function Yg(e,t){const n=tm(t);for(const i of e.elements)n.some((e=>Sp(e,i)))||n.push(i);return{arrayValue:{values:n}}}class Jg extends $g{constructor(e){super(),this.elements=e}}function Xg(e,t){let n=tm(t);for(const i of e.elements)n=n.filter((e=>!Sp(e,i)));return{arrayValue:{values:n}}}class Zg extends $g{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function em(e){return _p(e.integerValue||e.doubleValue)}function tm(e){return Op(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class nm{constructor(e,t){this.version=e,this.transformResults=t}}class im{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new im}static exists(e){return new im(void 0,e)}static updateTime(e){return new im(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sm(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class rm{}function om(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new mm(e.key,im.none()):new um(e.key,e.data,im.none());{const n=e.data,i=Vp.empty();let s=new lp(Ff.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),s=s.add(e)}return new dm(e.key,i,new dp(s.toArray()),im.none())}}function am(e,t,n){e instanceof um?function(e,t,n){const i=e.value.clone(),s=pm(e.fieldTransforms,t,n.transformResults);i.setAll(s),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof dm?function(e,t,n){if(!sm(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=pm(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(fm(e)),s.setAll(i),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function cm(e,t,n,i){return e instanceof um?function(e,t,n,i){if(!sm(e.precondition,t))return n;const s=e.value.clone(),r=gm(e.fieldTransforms,i,t);return s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,i):e instanceof dm?function(e,t,n,i){if(!sm(e.precondition,t))return n;const s=gm(e.fieldTransforms,i,t),r=t.data;return r.setAll(fm(e)),r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):function(e,t,n){return sm(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function hm(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),s=Kg(i.transform,e||null);null!=s&&(null===n&&(n=Vp.empty()),n.set(i.field,s))}return n||null}function lm(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Df(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Qg&&t instanceof Qg||e instanceof Jg&&t instanceof Jg?Df(e.elements,t.elements,Sp):e instanceof Zg&&t instanceof Zg?Sp(e.Ie,t.Ie):e instanceof Gg&&t instanceof Gg}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class um extends rm{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class dm extends rm{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function fm(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function pm(e,t,n){const i=new Map;gf(e.length===n.length);for(let s=0;s<n.length;s++){const r=e[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,Hg(o,a,n[s]))}return i}function gm(e,t,n){const i=new Map;for(const s of e){const e=s.transform,r=n.data.field(s.field);i.set(s.field,Wg(e,r,t))}return i}class mm extends rm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _m extends rm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class ym{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const t=this.mutations[i];t.key.isEqual(e.key)&&am(t,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=cm(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=cm(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Lg();return this.mutations.forEach((i=>{const s=e.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=t.has(i.key)?null:o;const a=om(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(xf.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Vg())}isEqual(e){return this.batchId===e.batchId&&Df(this.mutations,e.mutations,((e,t)=>lm(e,t)))&&Df(this.baseMutations,e.baseMutations,((e,t)=>lm(e,t)))}}class vm{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){gf(e.mutations.length===n.length);let i=Fg;const s=e.mutations;for(let r=0;r<s.length;r++)i=i.insert(s[r].key,n[r].version);return new vm(e,t,n,i)}}
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class wm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Tm{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */var Im,bm;function Cm(e){switch(e){default:return pf();case _f.CANCELLED:case _f.UNKNOWN:case _f.DEADLINE_EXCEEDED:case _f.RESOURCE_EXHAUSTED:case _f.INTERNAL:case _f.UNAVAILABLE:case _f.UNAUTHENTICATED:return!1;case _f.INVALID_ARGUMENT:case _f.NOT_FOUND:case _f.ALREADY_EXISTS:case _f.PERMISSION_DENIED:case _f.FAILED_PRECONDITION:case _f.ABORTED:case _f.OUT_OF_RANGE:case _f.UNIMPLEMENTED:case _f.DATA_LOSS:return!0}}function Em(e){if(void 0===e)return uf("GRPC error has no .code"),_f.UNKNOWN;switch(e){case Im.OK:return _f.OK;case Im.CANCELLED:return _f.CANCELLED;case Im.UNKNOWN:return _f.UNKNOWN;case Im.DEADLINE_EXCEEDED:return _f.DEADLINE_EXCEEDED;case Im.RESOURCE_EXHAUSTED:return _f.RESOURCE_EXHAUSTED;case Im.INTERNAL:return _f.INTERNAL;case Im.UNAVAILABLE:return _f.UNAVAILABLE;case Im.UNAUTHENTICATED:return _f.UNAUTHENTICATED;case Im.INVALID_ARGUMENT:return _f.INVALID_ARGUMENT;case Im.NOT_FOUND:return _f.NOT_FOUND;case Im.ALREADY_EXISTS:return _f.ALREADY_EXISTS;case Im.PERMISSION_DENIED:return _f.PERMISSION_DENIED;case Im.FAILED_PRECONDITION:return _f.FAILED_PRECONDITION;case Im.ABORTED:return _f.ABORTED;case Im.OUT_OF_RANGE:return _f.OUT_OF_RANGE;case Im.UNIMPLEMENTED:return _f.UNIMPLEMENTED;case Im.DATA_LOSS:return _f.DATA_LOSS;default:return pf()}}(bm=Im||(Im={}))[bm.OK=0]="OK",bm[bm.CANCELLED=1]="CANCELLED",bm[bm.UNKNOWN=2]="UNKNOWN",bm[bm.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",bm[bm.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",bm[bm.NOT_FOUND=5]="NOT_FOUND",bm[bm.ALREADY_EXISTS=6]="ALREADY_EXISTS",bm[bm.PERMISSION_DENIED=7]="PERMISSION_DENIED",bm[bm.UNAUTHENTICATED=16]="UNAUTHENTICATED",bm[bm.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",bm[bm.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",bm[bm.ABORTED=10]="ABORTED",bm[bm.OUT_OF_RANGE=11]="OUT_OF_RANGE",bm[bm.UNIMPLEMENTED=12]="UNIMPLEMENTED",bm[bm.INTERNAL=13]="INTERNAL",bm[bm.UNAVAILABLE=14]="UNAVAILABLE",bm[bm.DATA_LOSS=15]="DATA_LOSS";
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const Sm=new sf([4294967295,4294967295],0);function km(e){const t=(new TextEncoder).encode(e),n=new nf;return n.update(t),new Uint8Array(n.digest())}function Nm(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new sf([n,i],0),new sf([s,r],0)]}class Am{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Rm(`Invalid padding: ${t}`);if(n<0)throw new Rm(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Rm(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Rm(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=sf.fromNumber(this.Te)}de(e,t,n){let i=e.add(t.multiply(sf.fromNumber(n)));return 1===i.compare(Sm)&&(i=new sf([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;const t=km(e),[n,i]=Nm(t);for(let s=0;s<this.hashCount;s++){const e=this.de(n,i,s);if(!this.Ae(e))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),r=new Am(s,i,t);return n.forEach((e=>r.insert(e))),r}insert(e){if(0===this.Te)return;const t=km(e),[n,i]=Nm(t);for(let s=0;s<this.hashCount;s++){const e=this.de(n,i,s);this.Re(e)}}Re(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Rm extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Dm{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Pm.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Dm(xf.min(),i,new ap(Rf),Rg(),Vg())}}class Pm{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Pm(n,t,Vg(),Vg(),Vg())}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class xm{constructor(e,t,n,i){this.Ve=e,this.removedTargetIds=t,this.key=n,this.me=i}}class Om{constructor(e,t){this.targetId=e,this.fe=t}}class Lm{constructor(e,t,n=pp.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Mm{constructor(){this.ge=0,this.pe=Vm(),this.ye=pp.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Vg(),t=Vg(),n=Vg();return this.pe.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:pf()}})),new Pm(this.ye,this.we,e,t,n)}Fe(){this.Se=!1,this.pe=Vm()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,gf(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class Fm{constructor(e){this.Le=e,this.ke=new Map,this.qe=Rg(),this.Qe=Um(),this.Ke=new ap(Rf)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,(t=>{const n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.Ce(e.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(e.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(t);break;case 3:this.je(t)&&(n.Be(),n.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.Ce(e.resumeToken));break;default:pf()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach(((e,n)=>{this.je(n)&&t(n)}))}Je(e){const t=e.targetId,n=e.fe.count,i=this.Ye(t);if(i){const s=i.target;if(fg(s))if(0===n){const e=new Uf(s.path);this.We(t,e,jp.newNoDocument(e,xf.min()))}else gf(1===n);else{const i=this.Ze(t);if(i!==n){const n=this.Xe(e),s=n?this.et(n,e,i):1;if(0!==s){this.He(t);const e=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,e)}}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let r,o;try{r=yp(n).toUint8Array()}catch(e){if(e instanceof fp)return df("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new Am(r,i,s)}catch(e){return df(e instanceof Rm?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.Te?null:o}et(e,t,n){return t.fe.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach((n=>{const s=this.Le.nt(),r=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;e.mightContain(r)||(this.We(t,n,null),i++)})),i}it(e){const t=new Map;this.ke.forEach(((n,i)=>{const s=this.Ye(i);if(s){if(n.current&&fg(s.target)){const t=new Uf(s.target.path);null!==this.qe.get(t)||this.st(i,t)||this.We(i,t,jp.newNoDocument(t,e))}n.De&&(t.set(i,n.ve()),n.Fe())}}));let n=Vg();this.Qe.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.qe.forEach(((t,n)=>n.setReadTime(e)));const i=new Dm(e,t,this.Ke,this.qe,n);return this.qe=Rg(),this.Qe=Um(),this.Ke=new ap(Rf),i}Ue(e,t){if(!this.je(e))return;const n=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,n),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,n){if(!this.je(e))return;const i=this.ze(e);this.st(e,t)?i.Me(t,1):i.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),n&&(this.qe=this.qe.insert(t,n))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new Mm,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new lp(Rf),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=null!==this.Ye(e);return t||lf("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Mm),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.We(e,t,null)}))}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Um(){return new ap(Uf.comparator)}function Vm(){return new ap(Uf.comparator)}const qm={asc:"ASCENDING",desc:"DESCENDING"},jm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bm={and:"AND",or:"OR"};class zm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function $m(e,t){return e.useProto3Json||np(t)?t:{value:t}}function Wm(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Hm(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Km(e,t){return Wm(e,t.toTimestamp())}function Gm(e){return gf(!!e),xf.fromTimestamp(function(e){const t=mp(e);return new Pf(t.seconds,t.nanos)}(e))}function Qm(e,t){return Ym(e,t).canonicalString()}function Ym(e,t){const n=function(e){return new Lf(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function Jm(e){const t=Lf.fromString(e);return gf(m_(t)),t}function Xm(e,t){return Qm(e.databaseId,t.path)}function Zm(e,t){const n=Jm(t);if(n.get(1)!==e.databaseId.projectId)throw new yf(_f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new yf(_f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Uf(n_(n))}function e_(e,t){return Qm(e.databaseId,t)}function t_(e){return new Lf(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function n_(e){return gf(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function i_(e,t,n){return{name:Xm(e,t),fields:n.value.mapValue.fields}}function s_(e,t){let n;if(t instanceof um)n={update:i_(e,t.key,t.value)};else if(t instanceof mm)n={delete:Xm(e,t.key)};else if(t instanceof dm)n={update:i_(e,t.key,t.data),updateMask:g_(t.fieldMask)};else{if(!(t instanceof _m))return pf();n={verify:Xm(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Gg)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Qg)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Jg)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Zg)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw pf()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Km(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:pf()}(e,t.precondition)),n}function r_(e,t){return{documents:[e_(e,t.path)]}}function o_(e,t){const n={structuredQuery:{}},i=t.path;let s;null!==t.collectionGroup?(s=i,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=e_(e,s);const r=function(e){if(0!==e.length)return p_(Qp.create(e,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const o=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:d_(e.field),direction:h_(e.dir)}}(e)))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=$m(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ut:n,parent:s}}function a_(e){let t=function(e){const t=Jm(e);return 4===t.length?Lf.emptyPath():n_(t)}(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){gf(1===i);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let r=[];n.where&&(r=function(e){const t=c_(e);return t instanceof Qp&&Jp(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new Wp(f_(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,np(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Bp(n,t)}(n.startAt));let h=null;return n.endAt&&(h=function(e){const t=!e.before,n=e.values||[];return new Bp(n,t)}(n.endAt)),function(e,t,n,i,s,r,o,a){return new pg(e,t,n,i,s,r,o,a)}(t,s,o,r,a,"F",c,h)}function c_(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=f_(e.unaryFilter.field);return Gp.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=f_(e.unaryFilter.field);return Gp.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=f_(e.unaryFilter.field);return Gp.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=f_(e.unaryFilter.field);return Gp.create(s,"!=",{nullValue:"NULL_VALUE"});default:return pf()}}(e):void 0!==e.fieldFilter?function(e){return Gp.create(f_(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pf()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Qp.create(e.compositeFilter.filters.map((e=>c_(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return pf()}}(e.compositeFilter.op))}(e):pf()}function h_(e){return qm[e]}function l_(e){return jm[e]}function u_(e){return Bm[e]}function d_(e){return{fieldPath:e.canonicalString()}}function f_(e){return Ff.fromServerFormat(e.fieldPath)}function p_(e){return e instanceof Gp?function(e){if("=="===e.op){if(Mp(e.value))return{unaryFilter:{field:d_(e.field),op:"IS_NAN"}};if(Lp(e.value))return{unaryFilter:{field:d_(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Mp(e.value))return{unaryFilter:{field:d_(e.field),op:"IS_NOT_NAN"}};if(Lp(e.value))return{unaryFilter:{field:d_(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:d_(e.field),op:l_(e.op),value:e.value}}}(e):e instanceof Qp?function(e){const t=e.getFilters().map((e=>p_(e)));return 1===t.length?t[0]:{compositeFilter:{op:u_(e.op),filters:t}}}(e):pf()}function g_(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function m_(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class __{constructor(e,t,n,i,s=xf.min(),r=xf.min(),o=pp.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new __(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new __(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new __(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new __(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class y_{constructor(e){this.ct=e}}function v_(e){const t=a_({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Tg(t,t.limit,"L"):t}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class w_{constructor(){this._n=new T_}addToCollectionParentIndex(e,t){return this._n.add(t),Wf.resolve()}getCollectionParents(e,t){return Wf.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return Wf.resolve()}deleteFieldIndex(e,t){return Wf.resolve()}deleteAllFieldIndexes(e){return Wf.resolve()}createTargetIndexes(e,t){return Wf.resolve()}getDocumentsMatchingTarget(e,t){return Wf.resolve(null)}getIndexType(e,t){return Wf.resolve(0)}getFieldIndexes(e,t){return Wf.resolve([])}getNextCollectionGroupToUpdate(e){return Wf.resolve(null)}getMinOffset(e,t){return Wf.resolve(qf.min())}getMinOffsetFromCollectionGroup(e,t){return Wf.resolve(qf.min())}updateCollectionGroup(e,t,n){return Wf.resolve()}updateIndexEntries(e,t){return Wf.resolve()}}class T_{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new lp(Lf.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new lp(Lf.comparator)).toArray()}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class I_{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new I_(0)}static Bn(){return new I_(-1)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class b_{constructor(){this.changes=new Ng((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,jp.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Wf.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class C_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class E_{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&cm(n.mutation,e,dp.empty(),Pf.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Vg()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Vg()){const i=Og();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=Pg();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Og();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Vg())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let s=Rg();const r=Mg(),o=Mg();return t.forEach(((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof dm)?s=s.insert(t.key,t):void 0!==o?(r.set(t.key,o.mutation.getFieldMask()),cm(o.mutation,t,o.mutation.getFieldMask(),Pf.now())):r.set(t.key,dp.empty())})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>r.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new C_(t,null!==(n=r.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Mg();let i=new ap(((e,t)=>e-t)),s=Vg();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const r=t.get(e);if(null===r)return;let o=n.get(e)||dp.empty();o=s.applyToLocalView(r,o),n.set(e,o);const a=(i.get(s.batchId)||Vg()).add(e);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,h=Lg();c.forEach((e=>{if(!s.has(e)){const i=om(t.get(e),n.get(e));null!==i&&h.set(e,i),s=s.add(e)}})),r.push(this.documentOverlayCache.saveOverlays(e,a,h))}return Wf.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,i){return function(e){return Uf.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_g(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):Wf.resolve(Og());let o=-1,a=s;return r.next((t=>Wf.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?Wf.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,Vg()))).next((e=>({batchId:o,changes:xg(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Uf(t)).next((e=>{let t=Pg();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let r=Pg();return this.indexManager.getCollectionParents(e,s).next((o=>Wf.forEach(o,(o=>{const a=function(e,t){return new pg(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(s));return this.getDocumentsMatchingCollectionQuery(e,a,n,i).next((e=>{e.forEach(((e,t)=>{r=r.insert(e,t)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i)))).next((e=>{s.forEach(((t,n)=>{const i=n.getKey();null===e.get(i)&&(e=e.insert(i,jp.newInvalidDocument(i)))}));let n=Pg();return e.forEach(((e,i)=>{const r=s.get(e);void 0!==r&&cm(r.mutation,i,dp.empty(),Pf.now()),Eg(t,i)&&(n=n.insert(e,i))})),n}))}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class S_{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return Wf.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Gm(e.createTime)}}(t)),Wf.resolve()}getNamedQuery(e,t){return Wf.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(e){return{name:e.name,query:v_(e.bundledQuery),readTime:Gm(e.readTime)}}(t)),Wf.resolve()}}
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class k_{constructor(){this.overlays=new ap(Uf.comparator),this.hr=new Map}getOverlay(e,t){return Wf.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Og();return Wf.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.ht(e,t,i)})),Wf.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.hr.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.hr.delete(n)),Wf.resolve()}getOverlaysForCollection(e,t,n){const i=Og(),s=t.length+1,r=new Uf(t.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const e=o.getNext().value,r=e.getKey();if(!t.isPrefixOf(r.path))break;r.path.length===s&&e.largestBatchId>n&&i.set(e.getKey(),e)}return Wf.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new ap(((e,t)=>e-t));const r=this.overlays.getIterator();for(;r.hasNext();){const e=r.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=Og(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Og(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=i)););return Wf.resolve(o)}ht(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.hr.get(i.largestBatchId).delete(n.key);this.hr.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new wm(t,n));let s=this.hr.get(t);void 0===s&&(s=Vg(),this.hr.set(t,s)),this.hr.set(t,s.add(n.key))}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class N_{constructor(){this.Pr=new lp(A_.Ir),this.Tr=new lp(A_.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const n=new A_(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Ar(new A_(e,t))}Rr(e,t){e.forEach((e=>this.removeReference(e,t)))}Vr(e){const t=new Uf(new Lf([])),n=new A_(t,e),i=new A_(t,e+1),s=[];return this.Tr.forEachInRange([n,i],(e=>{this.Ar(e),s.push(e.key)})),s}mr(){this.Pr.forEach((e=>this.Ar(e)))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new Uf(new Lf([])),n=new A_(t,e),i=new A_(t,e+1);let s=Vg();return this.Tr.forEachInRange([n,i],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new A_(e,0),n=this.Pr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class A_{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return Uf.comparator(e.key,t.key)||Rf(e.pr,t.pr)}static Er(e,t){return Rf(e.pr,t.pr)||Uf.comparator(e.key,t.key)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class R_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new lp(A_.Ir)}checkEmpty(e){return Wf.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new ym(s,t,n,i);this.mutationQueue.push(r);for(const o of i)this.wr=this.wr.add(new A_(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Wf.resolve(r)}lookupMutationBatch(e,t){return Wf.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.br(n),s=i<0?0:i;return Wf.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Wf.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return Wf.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new A_(t,0),i=new A_(t,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([n,i],(e=>{const t=this.Sr(e.pr);s.push(t)})),Wf.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new lp(Rf);return t.forEach((e=>{const t=new A_(e,0),i=new A_(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,i],(e=>{n=n.add(e.pr)}))})),Wf.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;Uf.isDocumentKey(s)||(s=s.child(""));const r=new A_(new Uf(s),0);let o=new lp(Rf);return this.wr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.pr)),!0)}),r),Wf.resolve(this.Dr(o))}Dr(e){const t=[];return e.forEach((e=>{const n=this.Sr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){gf(0===this.Cr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return Wf.forEach(t.mutations,(i=>{const s=new A_(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.wr=n}))}Mn(e){}containsKey(e,t){const n=new A_(t,0),i=this.wr.firstAfterOrEqual(n);return Wf.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Wf.resolve()}Cr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class D_{constructor(e){this.vr=e,this.docs=new ap(Uf.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,r=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Wf.resolve(n?n.document.mutableCopy():jp.newInvalidDocument(t))}getEntries(e,t){let n=Rg();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():jp.newInvalidDocument(e))})),Wf.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Rg();const r=t.path,o=new Uf(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!r.isPrefixOf(e.path))break;e.path.length>r.length+1||jf(Vf(o),n)<=0||(i.has(o.key)||Eg(t,o))&&(s=s.insert(o.key,o.mutableCopy()))}return Wf.resolve(s)}getAllFromCollectionGroup(e,t,n,i){pf()}Fr(e,t){return Wf.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new P_(this)}getSize(e){return Wf.resolve(this.size)}}class P_ extends b_{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(n)})),Wf.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class x_{constructor(e){this.persistence=e,this.Mr=new Ng((e=>ug(e)),dg),this.lastRemoteSnapshotVersion=xf.min(),this.highestTargetId=0,this.Or=0,this.Nr=new N_,this.targetCount=0,this.Br=I_.Nn()}forEachTarget(e,t){return this.Mr.forEach(((e,n)=>t(n))),Wf.resolve()}getLastRemoteSnapshotVersion(e){return Wf.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Wf.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),Wf.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),Wf.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Br=new I_(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,Wf.resolve()}updateTargetData(e,t){return this.qn(t),Wf.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,Wf.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Mr.forEach(((r,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Mr.delete(r),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),Wf.waitFor(s).next((()=>i))}getTargetCount(e){return Wf.resolve(this.targetCount)}getTargetData(e,t){const n=this.Mr.get(t)||null;return Wf.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),Wf.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((t=>{s.push(i.markPotentiallyOrphaned(e,t))})),Wf.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),Wf.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Nr.gr(t);return Wf.resolve(n)}containsKey(e,t){return Wf.resolve(this.Nr.containsKey(t))}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class O_{constructor(e,t){this.Lr={},this.overlays={},this.kr=new tp(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new x_(this),this.indexManager=new w_,this.remoteDocumentCache=function(e){return new D_(e)}((e=>this.referenceDelegate.Kr(e))),this.serializer=new y_(t),this.$r=new S_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new k_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Lr[e.toKey()];return n||(n=new R_(t,this.referenceDelegate),this.Lr[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){lf("MemoryPersistence","Starting transaction:",e);const i=new L_(this.kr.next());return this.referenceDelegate.Ur(),n(i).next((e=>this.referenceDelegate.Wr(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Gr(e,t){return Wf.or(Object.values(this.Lr).map((n=>()=>n.containsKey(e,t))))}}class L_ extends zf{constructor(e){super(),this.currentSequenceNumber=e}}class M_{constructor(e){this.persistence=e,this.zr=new N_,this.jr=null}static Hr(e){return new M_(e)}get Jr(){if(this.jr)return this.jr;throw pf()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),Wf.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),Wf.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),Wf.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach((e=>this.Jr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Jr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Wf.forEach(this.Jr,(n=>{const i=Uf.fromPath(n);return this.Yr(e,i).next((e=>{e||t.removeEntry(i,xf.min())}))})).next((()=>(this.jr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Yr(e,t).next((e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())}))}Kr(e){return 0}Yr(e,t){return Wf.or([()=>Wf.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class F_{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=i}static Ki(e,t){let n=Vg(),i=Vg();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new F_(e,t.fromCache,n,i)}}
/**
             * @license
             * Copyright 2023 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class U_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class V_{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=N()?8:Kf.v(C())>0?6:4}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.ji(e,t).next((e=>{s.result=e})).next((()=>{if(!s.result)return this.Hi(e,t,i,n).next((e=>{s.result=e}))})).next((()=>{if(s.result)return;const n=new U_;return this.Ji(e,t,n).next((i=>{if(s.result=i,this.Ui)return this.Yi(e,t,n,i.size)}))})).next((()=>s.result))}Yi(e,t,n,i){return n.documentReadCount<this.Wi?(hf()<=Z.DEBUG&&lf("QueryEngine","SDK will not create cache indexes for query:",Cg(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),Wf.resolve()):(hf()<=Z.DEBUG&&lf("QueryEngine","Query:",Cg(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Gi*i?(hf()<=Z.DEBUG&&lf("QueryEngine","The SDK decides to create cache indexes for query:",Cg(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vg(t))):Wf.resolve())}ji(e,t){if(mg(t))return Wf.resolve(null);let n=vg(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=Tg(t,null,"F"),n=vg(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const s=Vg(...i);return this.zi.getDocuments(e,s).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const r=this.Zi(t,i);return this.Xi(t,r,s,n.readTime)?this.ji(e,Tg(t,null,"F")):this.es(e,r,t,n)}))))})))))}Hi(e,t,n,i){return mg(t)||i.isEqual(xf.min())?Wf.resolve(null):this.zi.getDocuments(e,n).next((s=>{const r=this.Zi(t,s);return this.Xi(t,r,n,i)?Wf.resolve(null):(hf()<=Z.DEBUG&&lf("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Cg(t)),this.es(e,r,t,function(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=xf.fromTimestamp(1e9===i?new Pf(n+1,0):new Pf(n,i));return new qf(s,Uf.empty(),t)}(i,-1)).next((e=>e)))}))}Zi(e,t){let n=new lp(Sg(e));return t.forEach(((t,i)=>{Eg(e,i)&&(n=n.add(i))})),n}Xi(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,t,n){return hf()<=Z.DEBUG&&lf("QueryEngine","Using full collection scan to execute query:",Cg(t)),this.zi.getDocumentsMatchingQuery(e,t,qf.min(),n)}es(e,t,n,i){return this.zi.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class q_{constructor(e,t,n,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new ap(Rf),this.rs=new Ng((e=>ug(e)),dg),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new E_(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ns)))}}async function j_(e,t){const n=mf(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((s=>(i=s,n._s(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],r=[];let o=Vg();for(const e of i){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({us:e,removedBatchIds:s,addedBatchIds:r})))}))}))}function B_(e){const t=mf(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Qr.getLastRemoteSnapshotVersion(e)))}function z_(e,t){const n=mf(e),i=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const r=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const o=[];t.targetChanges.forEach(((r,a)=>{const c=s.get(a);if(!c)return;o.push(n.Qr.removeMatchingKeys(e,r.removedDocuments,a).next((()=>n.Qr.addMatchingKeys(e,r.addedDocuments,a))));let h=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(pp.EMPTY_BYTE_STRING,xf.min()).withLastLimboFreeSnapshotVersion(xf.min()):r.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(r.resumeToken,i)),s=s.insert(a,h),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,h,r)&&o.push(n.Qr.updateTargetData(e,h))}));let a=Rg(),c=Vg();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),o.push(function(e,t,n){let i=Vg(),s=Vg();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=Rg();return n.forEach(((n,r)=>{const o=e.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),r.isNoDocument()&&r.version.isEqual(xf.min())?(t.removeEntry(n,r.readTime),i=i.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(r),i=i.insert(n,r)):lf("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{cs:i,ls:s}}))}(e,r,t.documentUpdates).next((e=>{a=e.cs,c=e.ls}))),!i.isEqual(xf.min())){const t=n.Qr.getLastRemoteSnapshotVersion(e).next((t=>n.Qr.setTargetsMetadata(e,e.currentSequenceNumber,i)));o.push(t)}return Wf.waitFor(o).next((()=>r.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.ns=s,e)))}function $_(e,t){const n=mf(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}async function W_(e,t,n){const i=mf(e),s=i.ns.get(t),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(e=>i.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!Yf(e))throw e;lf("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.ns=i.ns.remove(t),i.rs.delete(s.target)}function H_(e,t,n){const i=mf(e);let s=xf.min(),r=Vg();return i.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const i=mf(e),s=i.rs.get(n);return void 0!==s?Wf.resolve(i.ns.get(s)):i.Qr.getTargetData(t,n)}(i,e,vg(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,i.Qr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{r=e}))})).next((()=>i.ts.getDocumentsMatchingQuery(e,t,n?s:xf.min(),n?r:Vg()))).next((e=>(function(e,t,n){let i=e.ss.get(t)||xf.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.ss.set(t,i)}(i,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,hs:r})))))}class K_{constructor(){this.activeTargetIds=qg}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class G_{constructor(){this.no=new K_,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,n){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new K_,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Q_{io(e){}shutdown(){}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Y_{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){lf("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){lf("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
             * @license
             * Copyright 2023 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */let J_=null;function X_(){return null===J_?J_=268435456+Math.round(2147483648*Math.random()):J_++,"0x"+J_.toString(16)
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */}const Z_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class ey{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const ty="WebChannelConnection";class ny extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=t+"://"+e.host,this.po=`projects/${n}/databases/${i}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get wo(){return!1}So(e,t,n,i,s){const r=X_(),o=this.bo(e,t.toUriEncodedString());lf("RestConnection",`Sending RPC '${e}' ${r}:`,o,n);const a={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(a,i,s),this.Co(e,o,a,n).then((t=>(lf("RestConnection",`Received RPC '${e}' ${r}: `,t),t)),(t=>{throw df("RestConnection",`RPC '${e}' ${r} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,i,s,r){return this.So(e,t,n,i,s)}Do(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+af,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}bo(e,t){const n=Z_[e];return`${this.fo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,t,n,i){const s=X_();return new Promise(((r,o)=>{const a=new tf;a.setWithCredentials(!0),a.listenOnce(Yd.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Qd.NO_ERROR:const t=a.getResponseJson();lf(ty,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),r(t);break;case Qd.TIMEOUT:lf(ty,`RPC '${e}' ${s} timed out`),o(new yf(_f.DEADLINE_EXCEEDED,"Request time out"));break;case Qd.HTTP_ERROR:const n=a.getStatus();if(lf(ty,`RPC '${e}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(_f).indexOf(t)>=0?t:_f.UNKNOWN}(t.status);o(new yf(e,t.message))}else o(new yf(_f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new yf(_f.UNAVAILABLE,"Connection failed."));break;default:pf()}}finally{lf(ty,`RPC '${e}' ${s} completed.`)}}));const c=JSON.stringify(i);lf(ty,`RPC '${e}' ${s} sending request:`,i),a.send(t,"POST",c,n,15)}))}Fo(e,t,n){const i=X_(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=new Ed,o=bl(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const h=s.join("");lf(ty,`Creating RPC '${e}' stream ${i}: ${h}`,a);const l=r.createWebChannel(h,a);let u=!1,d=!1;const f=new ey({lo:t=>{d?lf(ty,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(u||(lf(ty,`Opening RPC '${e}' stream ${i} transport.`),l.open(),u=!0),lf(ty,`RPC '${e}' stream ${i} sending:`,t),l.send(t))},ho:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,ef.EventType.OPEN,(()=>{d||lf(ty,`RPC '${e}' stream ${i} transport opened.`)})),p(l,ef.EventType.CLOSE,(()=>{d||(d=!0,lf(ty,`RPC '${e}' stream ${i} transport closed`),f.Vo())})),p(l,ef.EventType.ERROR,(t=>{d||(d=!0,df(ty,`RPC '${e}' stream ${i} transport errored:`,t),f.Vo(new yf(_f.UNAVAILABLE,"The operation could not be completed")))})),p(l,ef.EventType.MESSAGE,(t=>{var n;if(!d){const s=t.data[0];gf(!!s);const r=s,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){lf(ty,`RPC '${e}' stream ${i} received error:`,o);const t=o.status;let n=function(e){const t=Im[e];if(void 0!==t)return Em(t)}(t),s=o.message;void 0===n&&(n=_f.INTERNAL,s="Unknown error status: "+t+" with message "+o.message),d=!0,f.Vo(new yf(n,s)),l.close()}else lf(ty,`RPC '${e}' stream ${i} received:`,s),f.mo(s)}})),p(o,Jd.STAT_EVENT,(t=>{t.stat===Xd?lf(ty,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===Zd&&lf(ty,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{f.Ro()}),0),f}}function iy(){return"undefined"!=typeof document?document:null}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function sy(e){return new zm(e,!0)}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class ry{constructor(e,t,n=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=t,this.Mo=n,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const t=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Lo),i=Math.max(0,t-n);i>0&&lf("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,(()=>(this.Lo=Date.now(),e()))),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Bo&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){null!==this.Bo&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class oy{constructor(e,t,n,i,s,r,o,a){this.oi=e,this.$o=n,this.Uo=i,this.connection=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new ry(e,t)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,(()=>this.e_())))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==e?this.jo.reset():t&&t.code===_f.RESOURCE_EXHAUSTED?(uf(t.toString()),uf("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===_f.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Wo===t&&this.o_(e,n)}),(t=>{e((()=>{const e=new yf(_f.UNKNOWN,"Fetching auth token failed: "+t.message);return this.__(e)}))}))}o_(e,t){const n=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po((()=>{n((()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,(()=>(this.Jo()&&(this.state=3),Promise.resolve()))),this.listener.Po())))})),this.stream.To((e=>{n((()=>this.__(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Yo(){this.state=5,this.jo.qo((async()=>{this.state=0,this.start()}))}__(e){return lf("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget((()=>this.Wo===e?t():(lf("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ay extends oy{constructor(e,t,n,i,s,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,r),this.serializer=s}a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:pf()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=function(e,t){return e.useProto3Json?(gf(void 0===t||"string"==typeof t),pp.fromBase64String(t||"")):(gf(void 0===t||t instanceof Uint8Array),pp.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?_f.UNKNOWN:Em(e.code);return new yf(t,e.message||"")}(o);n=new Lm(i,s,r,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=Zm(e,i.document.name),r=Gm(i.document.updateTime),o=i.document.createTime?Gm(i.document.createTime):xf.min(),a=new Vp({mapValue:{fields:i.document.fields}}),c=jp.newFoundDocument(s,r,o,a),h=i.targetIds||[],l=i.removedTargetIds||[];n=new xm(h,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=Zm(e,i.document),r=i.readTime?Gm(i.readTime):xf.min(),o=jp.newNoDocument(s,r),a=i.removedTargetIds||[];n=new xm([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=Zm(e,i.document),r=i.removedTargetIds||[];n=new xm([],r,s,null)}else{if(!("filter"in t))return pf();{t.filter;const e=t.filter;e.targetId;const{count:i=0,unchangedNames:s}=e,r=new Tm(i,s),o=e.targetId;n=new Om(o,r)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return xf.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?xf.min():t.readTime?Gm(t.readTime):xf.min()}(e);return this.listener.u_(t,n)}c_(e){const t={};t.database=t_(this.serializer),t.addTarget=function(e,t){let n;const i=t.target;if(n=fg(i)?{documents:r_(e,i)}:{query:o_(e,i).ut},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Hm(e,t.resumeToken);const i=$m(e,t.expectedCount);null!==i&&(n.expectedCount=i)}else if(t.snapshotVersion.compareTo(xf.min())>0){n.readTime=Wm(e,t.snapshotVersion.toTimestamp());const i=$m(e,t.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pf()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.t_(t)}l_(e){const t={};t.database=t_(this.serializer),t.removeTarget=e,this.t_(t)}}class cy extends oy{constructor(e,t,n,i,s,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,r),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,t){return this.connection.Fo("Write",e,t)}onMessage(e){if(gf(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const t=function(e,t){return e&&e.length>0?(gf(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Gm(e.updateTime):Gm(t);return n.isEqual(xf.min())&&(n=Gm(t)),new nm(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Gm(e.commitTime);return this.listener.T_(n,t)}return gf(!e.writeResults||0===e.writeResults.length),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=t_(this.serializer),this.t_(e)}I_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>s_(this.serializer,e)))};this.t_(t)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class hy extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new yf(_f.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.So(e,Ym(t,n),i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===_f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new yf(_f.UNKNOWN,e.toString())}))}vo(e,t,n,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.vo(e,Ym(t,n),i,r,o,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===_f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new yf(_f.UNKNOWN,e.toString())}))}terminate(){this.A_=!0,this.connection.terminate()}}class ly{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve()))))}S_(e){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,"Online"===e&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(uf(t),this.g_=!1):lf("OnlineStateTracker",t)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class uy{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io((e=>{n.enqueueAndForget((async()=>{wy(this)&&(lf("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=mf(e);t.v_.add(4),await fy(t),t.x_.set("Unknown"),t.v_.delete(4),await dy(t)}(this))}))})),this.x_=new ly(n,i)}}async function dy(e){if(wy(e))for(const t of e.F_)await t(!0)}async function fy(e){for(const t of e.F_)await t(!1)}function py(e,t){const n=mf(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),vy(n)?yy(n):Fy(n).Jo()&&my(n,t))}function gy(e,t){const n=mf(e),i=Fy(n);n.C_.delete(t),i.Jo()&&_y(n,t),0===n.C_.size&&(i.Jo()?i.Xo():wy(n)&&n.x_.set("Unknown"))}function my(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(xf.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Fy(e).c_(t)}function _y(e,t){e.O_.Oe(t),Fy(e).l_(t)}function yy(e){e.O_=new Fm({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Fy(e).start(),e.x_.p_()}function vy(e){return wy(e)&&!Fy(e).Ho()&&e.C_.size>0}function wy(e){return 0===mf(e).v_.size}function Ty(e){e.O_=void 0}async function Iy(e){e.C_.forEach(((t,n)=>{my(e,t)}))}async function by(e,t){Ty(e),vy(e)?(e.x_.S_(t),yy(e)):e.x_.set("Unknown")}async function Cy(e,t,n){if(e.x_.set("Online"),t instanceof Lm&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.C_.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.C_.delete(i),e.O_.removeTarget(i))}(e,t)}catch(n){lf("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ey(e,n)}else if(t instanceof xm?e.O_.$e(t):t instanceof Om?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(xf.min()))try{const t=await B_(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.O_.it(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.C_.get(i);s&&e.C_.set(i,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const i=e.C_.get(t);if(!i)return;e.C_.set(t,i.withResumeToken(pp.EMPTY_BYTE_STRING,i.snapshotVersion)),_y(e,t);const s=new __(i.target,t,n,i.sequenceNumber);my(e,s)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){lf("RemoteStore","Failed to raise snapshot:",t),await Ey(e,t)}}async function Ey(e,t,n){if(!Yf(t))throw t;e.v_.add(1),await fy(e),e.x_.set("Offline"),n||(n=()=>B_(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{lf("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await dy(e)}))}function Sy(e,t){return t().catch((n=>Ey(e,n,t)))}async function ky(e){const t=mf(e),n=Uy(t);let i=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;Ny(t);)try{const e=await $_(t.localStore,i);if(null===e){0===t.D_.length&&n.Xo();break}i=e.batchId,Ay(t,e)}catch(e){await Ey(t,e)}Ry(t)&&Dy(t)}function Ny(e){return wy(e)&&e.D_.length<10}function Ay(e,t){e.D_.push(t);const n=Uy(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function Ry(e){return wy(e)&&!Uy(e).Ho()&&e.D_.length>0}function Dy(e){Uy(e).start()}async function Py(e){Uy(e).d_()}async function xy(e){const t=Uy(e);for(const n of e.D_)t.I_(n.mutations)}async function Oy(e,t,n){const i=e.D_.shift(),s=vm.from(i,t,n);await Sy(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await ky(e)}async function Ly(e,t){t&&Uy(e).P_&&await async function(e,t){if(function(e){return Cm(e)&&e!==_f.ABORTED}(t.code)){const n=e.D_.shift();Uy(e).Zo(),await Sy(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await ky(e)}}(e,t),Ry(e)&&Dy(e)}async function My(e,t){const n=mf(e);n.asyncQueue.verifyOperationInProgress(),lf("RemoteStore","RemoteStore received new credentials");const i=wy(n);n.v_.add(3),await fy(n),i&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await dy(n)}function Fy(e){return e.N_||(e.N_=function(e,t,n){const i=mf(e);return i.R_(),new ay(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)
/**
             * @license
             * Copyright 2018 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */}(e.datastore,e.asyncQueue,{Po:Iy.bind(null,e),To:by.bind(null,e),u_:Cy.bind(null,e)}),e.F_.push((async t=>{t?(e.N_.Zo(),vy(e)?yy(e):e.x_.set("Unknown")):(await e.N_.stop(),Ty(e))}))),e.N_}function Uy(e){return e.B_||(e.B_=function(e,t,n){const i=mf(e);return i.R_(),new cy(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{Po:Py.bind(null,e),To:Ly.bind(null,e),E_:xy.bind(null,e),T_:Oy.bind(null,e)}),e.F_.push((async t=>{t?(e.B_.Zo(),await ky(e)):(await e.B_.stop(),e.D_.length>0&&(lf("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))}))),e.B_
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */}class Vy{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new vf,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const r=Date.now()+n,o=new Vy(e,t,r,i,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new yf(_f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qy(e,t){if(uf("AsyncQueue",`${t}: ${e}`),Yf(e))return new yf(_f.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class jy{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Uf.comparator(t.key,n.key):(e,t)=>Uf.comparator(e.key,t.key),this.keyedMap=Pg(),this.sortedSet=new ap(this.comparator)}static emptySet(e){return new jy(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof jy))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new jy;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class By{constructor(){this.L_=new ap(Uf.comparator)}track(e){const t=e.doc.key,n=this.L_.get(t);n?0!==e.type&&3===n.type?this.L_=this.L_.insert(t,e):3===e.type&&1!==n.type?this.L_=this.L_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.L_=this.L_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.L_=this.L_.remove(t):1===e.type&&2===n.type?this.L_=this.L_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):pf():this.L_=this.L_.insert(t,e)}k_(){const e=[];return this.L_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class zy{constructor(e,t,n,i,s,r,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,i,s){const r=[];return t.forEach((e=>{r.push({type:0,doc:e})})),new zy(e,t,jy.emptySet(t),r,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ig(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class $y{constructor(){this.q_=void 0,this.Q_=[]}}class Wy{constructor(){this.queries=new Ng((e=>bg(e)),Ig),this.onlineState="Unknown",this.K_=new Set}}async function Hy(e,t){const n=mf(e),i=t.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new $y),s)try{r.q_=await n.onListen(i)}catch(e){const n=qy(e,`Initialization of query '${Cg(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,r),r.Q_.push(t),t.U_(n.onlineState),r.q_&&t.W_(r.q_)&&Yy(n)}async function Ky(e,t){const n=mf(e),i=t.query;let s=!1;const r=n.queries.get(i);if(r){const e=r.Q_.indexOf(t);e>=0&&(r.Q_.splice(e,1),s=0===r.Q_.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function Gy(e,t){const n=mf(e);let i=!1;for(const s of t){const e=s.query,t=n.queries.get(e);if(t){for(const e of t.Q_)e.W_(s)&&(i=!0);t.q_=s}}i&&Yy(n)}function Qy(e,t,n){const i=mf(e),s=i.queries.get(t);if(s)for(const r of s.Q_)r.onError(n);i.queries.delete(t)}function Yy(e){e.K_.forEach((e=>{e.next()}))}class Jy{constructor(e,t,n){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=n||{}}W_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new zy(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Z_||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}H_(e){if(e.docChanges.length>0)return!0;const t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Y_(e){e=zy.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Xy{constructor(e){this.key=e}}class Zy{constructor(e){this.key=e}}class ev{constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=Vg(),this.mutatedKeys=Vg(),this.ua=Sg(e),this.ca=new jy(this.ua)}get la(){return this.oa}ha(e,t){const n=t?t.Pa:new By,i=t?t.ca:this.ca;let s=t?t.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const h=i.get(e),l=Eg(this.query,t)?t:null,u=!!h&&this.mutatedKeys.has(h.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;h&&l?h.data.isEqual(l.data)?u!==d&&(n.track({type:3,doc:l}),f=!0):this.Ia(h,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.ua(l,a)>0||c&&this.ua(l,c)<0)&&(o=!0)):!h&&l?(n.track({type:0,doc:l}),f=!0):h&&!l&&(n.track({type:1,doc:h}),f=!0,(a||c)&&(o=!0)),f&&(l?(r=r.add(l),s=d?s.add(e):s.delete(e)):(r=r.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const e="F"===this.query.limitType?r.last():r.first();r=r.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{ca:r,Pa:n,Xi:o,mutatedKeys:s}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const r=e.Pa.k_();r.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pf()}};return n(e)-n(t)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e.type,t.type)||this.ua(e.doc,t.doc))),this.Ta(n),i=null!=i&&i;const o=t&&!i?this.Ea():[],a=0===this.aa.size&&this.current&&!i?1:0,c=a!==this._a;return this._a=a,0!==r.length||c?{snapshot:new zy(this.query,e.ca,s,r,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),da:o}:{da:o}}U_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new By,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach((e=>this.oa=this.oa.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.oa=this.oa.delete(e))),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=Vg(),this.ca.forEach((e=>{this.Aa(e.key)&&(this.aa=this.aa.add(e.key))}));const t=[];return e.forEach((e=>{this.aa.has(e)||t.push(new Zy(e))})),this.aa.forEach((n=>{e.has(n)||t.push(new Xy(n))})),t}Ra(e){this.oa=e.hs,this.aa=Vg();const t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return zy.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}}class tv{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class nv{constructor(e){this.key=e,this.ma=!1}}class iv{constructor(e,t,n,i,s,r){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.fa={},this.ga=new Ng((e=>bg(e)),Ig),this.pa=new Map,this.ya=new Set,this.wa=new ap(Uf.comparator),this.Sa=new Map,this.ba=new N_,this.Da={},this.Ca=new Map,this.va=I_.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}async function sv(e,t){const n=function(e){const t=mf(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ov.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=wv.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=cv.bind(null,t),t.fa.u_=Gy.bind(null,t.eventManager),t.fa.xa=Qy.bind(null,t.eventManager),t}(e);let i,s;const r=n.ga.get(t);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.Va();else{const e=await function(e,t){const n=mf(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.Qr.getTargetData(e,t).next((s=>s?(i=s,Wf.resolve(i)):n.Qr.allocateTargetId(e).next((s=>(i=new __(t,s,"TargetPurposeListen",e.currentSequenceNumber),n.Qr.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.ns.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(e.targetId,e),n.rs.set(t,e.targetId)),e}))}(n.localStore,vg(t)),r=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await async function(e,t,n,i,s){e.Ma=(t,n,i)=>async function(e,t,n,i){let s=t.view.ha(n);s.Xi&&(s=await H_(e.localStore,t.query,!1).then((({documents:e})=>t.view.ha(e,s))));const r=i&&i.targetChanges.get(t.targetId),o=i&&null!=i.targetMismatches.get(t.targetId),a=t.view.applyChanges(s,e.isPrimaryClient,r,o);return gv(e,t.targetId,a.da),a.snapshot}(e,t,n,i);const r=await H_(e.localStore,t,!0),o=new ev(t,r.hs),a=o.ha(r.documents),c=Pm.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,s),h=o.applyChanges(a,e.isPrimaryClient,c);gv(e,n,h.da);const l=new tv(t,n,o);return e.ga.set(t,l),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),h.snapshot}(n,t,i,"current"===r,e.resumeToken),n.isPrimaryClient&&py(n.remoteStore,e)}return s}async function rv(e,t){const n=mf(e),i=n.ga.get(t),s=n.pa.get(i.targetId);if(s.length>1)return n.pa.set(i.targetId,s.filter((e=>!Ig(e,t)))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await W_(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),gy(n.remoteStore,i.targetId),fv(n,i.targetId)})).catch($f)):(fv(n,i.targetId),await W_(n.localStore,i.targetId,!0))}async function ov(e,t){const n=mf(e);try{const e=await z_(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.Sa.get(t);i&&(gf(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.ma=!0:e.modifiedDocuments.size>0?gf(i.ma):e.removedDocuments.size>0&&(gf(i.ma),i.ma=!1))})),await yv(n,e,t)}catch(e){await $f(e)}}function av(e,t,n){const i=mf(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.ga.forEach(((n,i)=>{const s=i.view.U_(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=mf(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const s of n.Q_)s.U_(t)&&(i=!0)})),i&&Yy(n)}(i.eventManager,t),e.length&&i.fa.u_(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function cv(e,t,n){const i=mf(e);i.sharedClientState.updateQueryState(t,"rejected",n);const s=i.Sa.get(t),r=s&&s.key;if(r){let e=new ap(Uf.comparator);e=e.insert(r,jp.newNoDocument(r,xf.min()));const n=Vg().add(r),s=new Dm(xf.min(),new Map,new ap(Rf),e,n);await ov(i,s),i.wa=i.wa.remove(r),i.Sa.delete(t),_v(i)}else await W_(i.localStore,t,!1).then((()=>fv(i,t,n))).catch($f)}async function hv(e,t){const n=mf(e),i=t.batch.batchId;try{const e=await function(e,t){const n=mf(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const s=n.batch,r=s.keys();let o=Wf.resolve();return r.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const r=n.docVersions.get(e);gf(null!==r),t.version.compareTo(r)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Vg();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(n.localStore,t);dv(n,i,null),uv(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await yv(n,e)}catch(e){await $f(e)}}async function lv(e,t,n){const i=mf(e);try{const e=await function(e,t){const n=mf(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(gf(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);dv(i,t,n),uv(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await yv(i,e)}catch(n){await $f(n)}}function uv(e,t){(e.Ca.get(t)||[]).forEach((e=>{e.resolve()})),e.Ca.delete(t)}function dv(e,t,n){const i=mf(e);let s=i.Da[i.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),i.Da[i.currentUser.toKey()]=s}}function fv(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.pa.get(t))e.ga.delete(i),n&&e.fa.xa(i,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach((t=>{e.ba.containsKey(t)||pv(e,t)}))}function pv(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);null!==n&&(gy(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),_v(e))}function gv(e,t,n){for(const i of n)i instanceof Xy?(e.ba.addReference(i.key,t),mv(e,i)):i instanceof Zy?(lf("SyncEngine","Document no longer in limbo: "+i.key),e.ba.removeReference(i.key,t),e.ba.containsKey(i.key)||pv(e,i.key)):pf()}function mv(e,t){const n=t.key,i=n.path.canonicalString();e.wa.get(n)||e.ya.has(i)||(lf("SyncEngine","New document in limbo: "+n),e.ya.add(i),_v(e))}function _v(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new Uf(Lf.fromString(t)),i=e.va.next();e.Sa.set(i,new nv(n)),e.wa=e.wa.insert(n,i),py(e.remoteStore,new __(vg(gg(n.path)),i,"TargetPurposeLimboResolution",tp._e))}}async function yv(e,t,n){const i=mf(e),s=[],r=[],o=[];i.ga.isEmpty()||(i.ga.forEach(((e,a)=>{o.push(i.Ma(a,t,n).then((e=>{if((e||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);const t=F_.Ki(a.targetId,e);r.push(t)}})))})),await Promise.all(o),i.fa.u_(s),await async function(e,t){const n=mf(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Wf.forEach(t,(t=>Wf.forEach(t.qi,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>Wf.forEach(t.Qi,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!Yf(e))throw e;lf("LocalStore","Failed to update sequence numbers: "+e)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.ns.get(e),i=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(i);n.ns=n.ns.insert(e,s)}}}(i.localStore,r))}async function vv(e,t){const n=mf(e);if(!n.currentUser.isEqual(t)){lf("SyncEngine","User change. New user:",t.toKey());const e=await j_(n.localStore,t);n.currentUser=t,function(e,t){e.Ca.forEach((e=>{e.forEach((e=>{e.reject(new yf(_f.CANCELLED,t))}))})),e.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await yv(n,e.us)}}function wv(e,t){const n=mf(e),i=n.Sa.get(t);if(i&&i.ma)return Vg().add(i.key);{let e=Vg();const i=n.pa.get(t);if(!i)return e;for(const t of i){const i=n.ga.get(t);e=e.unionWith(i.view.la)}return e}}class Tv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=sy(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return function(e,t,n,i){return new q_(e,t,n,i)}(this.persistence,new V_,e.initialUser,this.serializer)}createPersistence(e){return new O_(M_.Hr,this.serializer)}createSharedClientState(e){return new G_}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Iv{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>av(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=vv.bind(null,this.syncEngine),await async function(e,t){const n=mf(e);t?(n.v_.delete(2),await dy(n)):t||(n.v_.add(2),await fy(n),n.x_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Wy}createDatastore(e){const t=sy(e.databaseInfo.databaseId),n=function(e){return new ny(e)}(e.databaseInfo);return function(e,t,n,i){return new hy(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,i,s){return new uy(e,t,n,i,s)}(this.localStore,this.datastore,e.asyncQueue,(e=>av(this.syncEngine,e,0)),Y_.D()?new Y_:new Q_)}createSyncEngine(e,t){return function(e,t,n,i,s,r,o){const a=new iv(e,t,n,i,s,r);return o&&(a.Fa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){const t=mf(e);lf("RemoteStore","RemoteStore shutting down."),t.v_.add(5),await fy(t),t.M_.shutdown(),t.x_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class bv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):uf("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Cv{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new yf(_f.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(e,t){const n=mf(e),i={documents:t.map((e=>Xm(n.serializer,e)))},s=await n.vo("BatchGetDocuments",n.serializer.databaseId,Lf.emptyPath(),i,t.length),r=new Map;s.forEach((e=>{const t=function(e,t){return"found"in t?function(e,t){gf(!!t.found),t.found.name,t.found.updateTime;const n=Zm(e,t.found.name),i=Gm(t.found.updateTime),s=t.found.createTime?Gm(t.found.createTime):xf.min(),r=new Vp({mapValue:{fields:t.found.fields}});return jp.newFoundDocument(n,i,s,r)}(e,t):"missing"in t?function(e,t){gf(!!t.missing),gf(!!t.readTime);const n=Zm(e,t.missing),i=Gm(t.readTime);return jp.newNoDocument(n,i)}(e,t):pf()}(n.serializer,e);r.set(t.key.toString(),t)}));const o=[];return t.forEach((e=>{const t=r.get(e.toString());gf(!!t),o.push(t)})),o}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastTransactionError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new mm(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=Uf.fromPath(t);this.mutations.push(new _m(n,this.precondition(n)))})),await async function(e,t){const n=mf(e),i={writes:t.map((e=>s_(n.serializer,e)))};await n.So("Commit",n.serializer.databaseId,Lf.emptyPath(),i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw pf();t=xf.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new yf(_f.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(xf.min())?im.exists(!1):im.updateTime(t):im.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(xf.min()))throw new yf(_f.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return im.updateTime(t)}return im.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Ev{constructor(e,t,n,i,s){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=i,this.deferred=s,this.za=n.maxAttempts,this.jo=new ry(this.asyncQueue,"transaction_retry")}ja(){this.za-=1,this.Ha()}Ha(){this.jo.qo((async()=>{const e=new Cv(this.datastore),t=this.Ja(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Ya(e)}))))})).catch((e=>{this.Ya(e)}))}))}Ja(e){try{const t=this.updateFunction(e);return!np(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Ya(e){this.za>0&&this.Za(e)?(this.za-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ha(),Promise.resolve())))):this.deferred.reject(e)}Za(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!Cm(t)}return!1}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Sv{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=of.UNAUTHENTICATED,this.clientId=Af.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{lf("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(lf("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new yf(_f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vf;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=qy(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function kv(e,t){e.asyncQueue.verifyOperationInProgress(),lf("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await j_(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Nv(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){lf("FirestoreClient","Using user provided OfflineComponentProvider");try{await kv(e,e._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!function(e){return"FirebaseError"===e.name?e.code===_f.FAILED_PRECONDITION||e.code===_f.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(i))throw i;df("Error using user provided cache. Falling back to memory cache: "+i),await kv(e,new Tv)}}else lf("FirestoreClient","Using default OfflineComponentProvider"),await kv(e,new Tv);return e._offlineComponents}(e);lf("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>My(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>My(t.remoteStore,n))),e._onlineComponents=t}async function Av(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(lf("FirestoreClient","Using user provided OnlineComponentProvider"),await Nv(e,e._uninitializedComponentsProvider._online)):(lf("FirestoreClient","Using default OnlineComponentProvider"),await Nv(e,new Iv))),e._onlineComponents}async function Rv(e){const t=await Av(e),n=t.eventManager;return n.onListen=sv.bind(null,t.syncEngine),n.onUnlisten=rv.bind(null,t.syncEngine),n}function Dv(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */}const Pv=new Map;
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function xv(e,t,n){if(!n)throw new yf(_f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ov(e){if(!Uf.isDocumentKey(e))throw new yf(_f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Lv(e){if(Uf.isDocumentKey(e))throw new yf(_f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Mv(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":pf()}function Fv(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new yf(_f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mv(e);throw new yf(_f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}class Uv{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new yf(_f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new yf(_f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,i){if(!0===t&&!0===i)throw new yf(_f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Dv(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new yf(_f.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new yf(_f.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new yf(_f.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vv{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new yf(_f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new yf(_f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uv(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Tf;switch(e.type){case"firstParty":return new Ef(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new yf(_f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Pv.get(e);t&&(lf("ComponentProvider","Removing Datastore"),Pv.delete(e),t.terminate())}(this),Promise.resolve()}}class qv{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new qv(this.firestore,e,this._query)}}class jv{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bv(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jv(this.firestore,e,this._key)}}class Bv extends qv{constructor(e,t,n){super(e,t,gg(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jv(this.firestore,null,new Uf(e))}withConverter(e){return new Bv(this.firestore,e,this._path)}}class zv{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new ry(this,"async_queue_retry"),this._u=()=>{const e=iy();e&&lf("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const e=iy();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const t=iy();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise((()=>{}));const t=new vf;return this.uu((()=>this.tu&&this.su?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.eu.push(e),this.cu())))}async cu(){if(0!==this.eu.length){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!Yf(e))throw e;lf("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo((()=>this.cu()))}}uu(e){const t=this.Xa.then((()=>(this.iu=!0,e().catch((e=>{this.ru=e,this.iu=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e);throw uf("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.iu=!1,e))))));return this.Xa=t,t}enqueueAfterDelay(e,t,n){this.au(),this.ou.indexOf(e)>-1&&(t=0);const i=Vy.createAndSchedule(this,e,t,n,(e=>this.lu(e)));return this.nu.push(i),i}au(){this.ru&&pf()}verifyOperationInProgress(){}async hu(){let e;do{e=this.Xa,await e}while(e!==this.Xa)}Pu(e){for(const t of this.nu)if(t.timerId===e)return!0;return!1}Iu(e){return this.hu().then((()=>{this.nu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.nu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.hu()}))}Tu(e){this.ou.push(e)}lu(e){const t=this.nu.indexOf(e);this.nu.splice(t,1)}}class $v extends Vv{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new zv,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Hv(this),this._firestoreClient.terminate()}}function Wv(e){return e._firestoreClient||Hv(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Hv(e){var t,n,i;const s=e._freezeSettings(),r=function(e,t,n,i){return new Ip(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Dv(i.experimentalLongPollingOptions),i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new Sv(e._authCredentials,e._appCheckCredentials,e._queue,r),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=s.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Kv{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kv(pp.fromBase64String(e))}catch(e){throw new yf(_f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Kv(pp.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Gv{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new yf(_f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ff(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Qv{constructor(e){this._methodName=e}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Yv{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new yf(_f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new yf(_f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Rf(this._lat,e._lat)||Rf(this._long,e._long)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Jv=/^__.*__$/;class Xv{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new dm(e,this.data,this.fieldMask,t,this.fieldTransforms):new um(e,this.data,t,this.fieldTransforms)}}class Zv{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new dm(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ew(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pf()}}class tw{constructor(e,t,n,i,s,r){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===s&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new tw(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.Au({path:n,Vu:!1});return i.mu(e),i}fu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.Au({path:n,Vu:!1});return i.Eu(),i}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return pw(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(0===e.length)throw this.pu("Document fields must not be empty");if(ew(this.du)&&Jv.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class nw{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||sy(e)}Su(e,t,n,i=!1){return new tw({du:e,methodName:t,wu:n,path:Ff.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iw(e){const t=e._freezeSettings(),n=sy(e._databaseId);return new nw(e._databaseId,!!t.ignoreUndefinedProperties,n)}function sw(e,t,n,i,s,r={}){const o=e.Su(r.merge||r.mergeFields?2:0,t,n,s);lw("Data must be an object, but it was:",o,i);const a=cw(i,o);let c,h;if(r.merge)c=new dp(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const e=[];for(const i of r.mergeFields){const s=uw(t,i,n);if(!o.contains(s))throw new yf(_f.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);gw(e,s)||e.push(s)}c=new dp(e),h=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,h=o.fieldTransforms;return new Xv(new Vp(a),c,h)}class rw extends Qv{_toFieldTransform(e){if(2!==e.du)throw 1===e.du?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof rw}}function ow(e,t,n,i=!1){return aw(n,e.Su(i?4:3,t))}function aw(e,t){if(hw(e=G(e)))return lw("Unsupported field value:",t,e),cw(e,t);if(e instanceof Qv)return function(e,t){if(!ew(t.du))throw t.pu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.pu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Vu&&4!==t.du)throw t.pu("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const s of e){let e=aw(s,t.gu(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=G(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return zg(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Pf.fromDate(e);return{timestampValue:Wm(t.serializer,n)}}if(e instanceof Pf){const n=new Pf(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Wm(t.serializer,n)}}if(e instanceof Yv)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Kv)return{bytesValue:Hm(t.serializer,e._byteString)};if(e instanceof jv){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.pu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Qm(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.pu(`Unsupported field value: ${Mv(e)}`)}(e,t)}function cw(e,t){const n={};return op(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):rp(e,((e,i)=>{const s=aw(i,t.Ru(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function hw(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Pf||e instanceof Yv||e instanceof Kv||e instanceof jv||e instanceof Qv)}function lw(e,t,n){if(!hw(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const i=Mv(n);throw"an object"===i?t.pu(e+" a custom object"):t.pu(e+" "+i)}}function uw(e,t,n){if((t=G(t))instanceof Gv)return t._internalPath;if("string"==typeof t)return fw(e,t);throw pw("Field path arguments must be of type string or ",e,!1,void 0,n)}const dw=new RegExp("[~\\*/\\[\\]]");function fw(e,t,n){if(t.search(dw)>=0)throw pw(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Gv(...t.split("."))._internalPath}catch(Zc){throw pw(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function pw(e,t,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new yf(_f.INVALID_ARGUMENT,a+e+c)}function gw(e,t){return e.some((e=>e.isEqual(t)))}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class mw{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new jv(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new _w(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(yw("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class _w extends mw{data(){return super.data()}}function yw(e,t){return"string"==typeof t?fw(e,t):t instanceof Gv?t._internalPath:t._delegate._internalPath}class vw{}class ww extends vw{}class Tw extends ww{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Tw(e,t,n)}_apply(e){const t=this._parse(e);return Nw(e._query,t),new qv(e.firestore,e.converter,wg(e._query,t))}_parse(e){const t=iw(e.firestore),n=function(e,t,n,i,s,r,o){let a;if(s.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new yf(_f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){kw(o,r);const t=[];for(const n of o)t.push(Sw(i,e,n));a={arrayValue:{values:t}}}else a=Sw(i,e,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||kw(o,r),a=ow(n,t,o,"in"===r||"not-in"===r);return Gp.create(s,r,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}class Iw extends vw{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Iw(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Qp.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const i=t.getFlattenedFilters();for(const s of i)Nw(n,s),n=wg(n,s)}(e._query,t),new qv(e.firestore,e.converter,wg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class bw extends ww{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new bw(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new yf(_f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new yf(_f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Wp(t,n)}(e._query,this._field,this._direction);return new qv(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new pg(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}class Cw extends ww{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Cw(e,t,n)}_apply(e){return new qv(e.firestore,e.converter,Tg(e._query,this._limit,this._limitType))}}class Ew extends ww{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Ew(e,t,n)}_apply(e){const t=function(e,t,n,i){if(n[0]=G(n[0]),n[0]instanceof mw)return function(e,t,n,i,s){if(!i)throw new yf(_f.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const r=[];for(const o of yg(e))if(o.field.isKeyField())r.push(Pp(t,i.key));else{const e=i.data.field(o.field);if(vp(e))throw new yf(_f.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new yf(_f.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}r.push(e)}return new Bp(r,s)}(e._query,e.firestore._databaseId,t,n[0]._document,i);{const s=iw(e.firestore);return function(e,t,n,i,s,r){const o=e.explicitOrderBy;if(s.length>o.length)throw new yf(_f.INVALID_ARGUMENT,`Too many arguments provided to ${i}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<s.length;c++){const r=s[c];if(o[c].field.isKeyField()){if("string"!=typeof r)throw new yf(_f.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${i}(), but got a ${typeof r}`);if(!_g(e)&&-1!==r.indexOf("/"))throw new yf(_f.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${i}() must be a plain document ID, but '${r}' contains a slash.`);const n=e.path.child(Lf.fromString(r));if(!Uf.isDocumentKey(n))throw new yf(_f.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${i}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new Uf(n);a.push(Pp(t,s))}else{const e=ow(n,i,r);a.push(e)}}return new Bp(a,r)}(e._query,e.firestore._databaseId,s,t,n,i)}}(e,this.type,this._docOrFields,this._inclusive);return new qv(e.firestore,e.converter,function(e,t){return new pg(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Sw(e,t,n){if("string"==typeof(n=G(n))){if(""===n)throw new yf(_f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_g(t)&&-1!==n.indexOf("/"))throw new yf(_f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(Lf.fromString(n));if(!Uf.isDocumentKey(i))throw new yf(_f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Pp(e,new Uf(i))}if(n instanceof jv)return Pp(e,n._key);throw new yf(_f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mv(n)}.`)}function kw(e,t){if(!Array.isArray(e)||0===e.length)throw new yf(_f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Nw(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new yf(_f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new yf(_f.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Aw{convertValue(e,t="none"){switch(Ep(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _p(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yp(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw pf()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return rp(e,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new Yv(_p(e.latitude),_p(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=wp(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Tp(e));default:return null}}convertTimestamp(e){const t=mp(e);return new Pf(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Lf.fromString(e);gf(m_(n));const i=new bp(n.get(1),n.get(3)),s=new Uf(n.popFirst(5));return i.isEqual(t)||uf(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Rw(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}class Dw extends Aw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kv(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new jv(this.firestore,null,t)}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Pw{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xw extends mw{constructor(e,t,n,i,s,r){super(e,t,n,i,r),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ow(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(yw("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Ow extends xw{data(e={}){return super.data(e)}}class Lw{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Pw(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Ow(this._firestore,this._userDataWriter,n.key,n,new Pw(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new yf(_f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const i=new Ow(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Pw(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const i=new Ow(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Pw(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,r=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),r=n.indexOf(t.doc.key)),{type:Mw(t.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Mw(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pf()}}class Fw extends Aw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kv(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new jv(this.firestore,null,t)}}const Uw={maxAttempts:5};function Vw(e,t){if((e=G(e)).firestore!==t)throw new yf(_f.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class qw extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=iw(e)}get(e){const t=Vw(e,this._firestore),n=new Dw(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return pf();const i=e[0];if(i.isFoundDocument())return new mw(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new mw(this._firestore,n,t._key,null,t.converter);throw pf()}))}set(e,t,n){const i=Vw(e,this._firestore),s=Rw(i.converter,t,n),r=sw(this._dataReader,"Transaction.set",i._key,s,null!==i.converter,n);return this._transaction.set(i._key,r),this}update(e,t,n,...i){const s=Vw(e,this._firestore);let r;return r="string"==typeof(t=G(t))||t instanceof Gv?function(e,t,n,i,s,r){const o=e.Su(1,t,n),a=[uw(t,i,n)],c=[s];if(r.length%2!=0)throw new yf(_f.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(uw(t,r[d])),c.push(r[d+1]);const h=[],l=Vp.empty();for(let d=a.length-1;d>=0;--d)if(!gw(h,a[d])){const e=a[d];let t=c[d];t=G(t);const n=o.fu(e);if(t instanceof rw)h.push(e);else{const i=aw(t,n);null!=i&&(h.push(e),l.set(e,i))}}const u=new dp(h);return new Zv(l,u,o.fieldTransforms)}(this._dataReader,"Transaction.update",s._key,t,n,i):function(e,t,n,i){const s=e.Su(1,t,n);lw("Data must be an object, but it was:",s,i);const r=[],o=Vp.empty();rp(i,((e,i)=>{const a=fw(t,e,n);i=G(i);const c=s.fu(a);if(i instanceof rw)r.push(a);else{const e=aw(i,c);null!=e&&(r.push(a),o.set(a,e))}}));const a=new dp(r);return new Zv(o,a,s.fieldTransforms)}(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,r),this}delete(e){const t=Vw(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Vw(e,this._firestore),n=new Fw(this._firestore);return super.get(e).then((e=>new xw(this._firestore,n,t._key,e._document,new Pw(!1,!1),t.converter)))}}!function(e,t=!0){!function(e){af=e}(ye),pe(new Q("firestore",((e,{instanceIdentifier:n,options:i})=>{const s=e.getProvider("app").getImmediate(),r=new $v(new bf(e.getProvider("auth-internal")),new kf(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new yf(_f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bp(e.options.projectId,t)}(s,n),s);return i=Object.assign({useFetchStreams:t},i),r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),Te(rf,"4.4.2",e),Te(rf,"4.4.2","esm2017")}()}}}));
