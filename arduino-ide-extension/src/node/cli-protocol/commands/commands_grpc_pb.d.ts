// package: cc.arduino.cli.commands
// file: commands/commands.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as commands_commands_pb from "../commands/commands_pb";
import * as commands_common_pb from "../commands/common_pb";
import * as commands_board_pb from "../commands/board_pb";
import * as commands_compile_pb from "../commands/compile_pb";
import * as commands_core_pb from "../commands/core_pb";
import * as commands_upload_pb from "../commands/upload_pb";
import * as commands_lib_pb from "../commands/lib_pb";

interface IArduinoCoreService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    init: IArduinoCoreService_IInit;
    destroy: IArduinoCoreService_IDestroy;
    rescan: IArduinoCoreService_IRescan;
    updateIndex: IArduinoCoreService_IUpdateIndex;
    updateLibrariesIndex: IArduinoCoreService_IUpdateLibrariesIndex;
    version: IArduinoCoreService_IVersion;
    boardDetails: IArduinoCoreService_IBoardDetails;
    boardAttach: IArduinoCoreService_IBoardAttach;
    boardList: IArduinoCoreService_IBoardList;
    boardListAll: IArduinoCoreService_IBoardListAll;
    compile: IArduinoCoreService_ICompile;
    platformInstall: IArduinoCoreService_IPlatformInstall;
    platformDownload: IArduinoCoreService_IPlatformDownload;
    platformUninstall: IArduinoCoreService_IPlatformUninstall;
    platformUpgrade: IArduinoCoreService_IPlatformUpgrade;
    upload: IArduinoCoreService_IUpload;
    platformSearch: IArduinoCoreService_IPlatformSearch;
    platformList: IArduinoCoreService_IPlatformList;
    libraryDownload: IArduinoCoreService_ILibraryDownload;
    libraryInstall: IArduinoCoreService_ILibraryInstall;
    libraryUninstall: IArduinoCoreService_ILibraryUninstall;
    libraryUpgradeAll: IArduinoCoreService_ILibraryUpgradeAll;
    librarySearch: IArduinoCoreService_ILibrarySearch;
    libraryList: IArduinoCoreService_ILibraryList;
}

interface IArduinoCoreService_IInit extends grpc.MethodDefinition<commands_commands_pb.InitReq, commands_commands_pb.InitResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/Init"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<commands_commands_pb.InitReq>;
    requestDeserialize: grpc.deserialize<commands_commands_pb.InitReq>;
    responseSerialize: grpc.serialize<commands_commands_pb.InitResp>;
    responseDeserialize: grpc.deserialize<commands_commands_pb.InitResp>;
}
interface IArduinoCoreService_IDestroy extends grpc.MethodDefinition<commands_commands_pb.DestroyReq, commands_commands_pb.DestroyResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/Destroy"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<commands_commands_pb.DestroyReq>;
    requestDeserialize: grpc.deserialize<commands_commands_pb.DestroyReq>;
    responseSerialize: grpc.serialize<commands_commands_pb.DestroyResp>;
    responseDeserialize: grpc.deserialize<commands_commands_pb.DestroyResp>;
}
interface IArduinoCoreService_IRescan extends grpc.MethodDefinition<commands_commands_pb.RescanReq, commands_commands_pb.RescanResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/Rescan"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<commands_commands_pb.RescanReq>;
    requestDeserialize: grpc.deserialize<commands_commands_pb.RescanReq>;
    responseSerialize: grpc.serialize<commands_commands_pb.RescanResp>;
    responseDeserialize: grpc.deserialize<commands_commands_pb.RescanResp>;
}
interface IArduinoCoreService_IUpdateIndex extends grpc.MethodDefinition<commands_commands_pb.UpdateIndexReq, commands_commands_pb.UpdateIndexResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/UpdateIndex"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<commands_commands_pb.UpdateIndexReq>;
    requestDeserialize: grpc.deserialize<commands_commands_pb.UpdateIndexReq>;
    responseSerialize: grpc.serialize<commands_commands_pb.UpdateIndexResp>;
    responseDeserialize: grpc.deserialize<commands_commands_pb.UpdateIndexResp>;
}
interface IArduinoCoreService_IUpdateLibrariesIndex extends grpc.MethodDefinition<commands_commands_pb.UpdateLibrariesIndexReq, commands_commands_pb.UpdateLibrariesIndexResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/UpdateLibrariesIndex"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<commands_commands_pb.UpdateLibrariesIndexReq>;
    requestDeserialize: grpc.deserialize<commands_commands_pb.UpdateLibrariesIndexReq>;
    responseSerialize: grpc.serialize<commands_commands_pb.UpdateLibrariesIndexResp>;
    responseDeserialize: grpc.deserialize<commands_commands_pb.UpdateLibrariesIndexResp>;
}
interface IArduinoCoreService_IVersion extends grpc.MethodDefinition<commands_commands_pb.VersionReq, commands_commands_pb.VersionResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/Version"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<commands_commands_pb.VersionReq>;
    requestDeserialize: grpc.deserialize<commands_commands_pb.VersionReq>;
    responseSerialize: grpc.serialize<commands_commands_pb.VersionResp>;
    responseDeserialize: grpc.deserialize<commands_commands_pb.VersionResp>;
}
interface IArduinoCoreService_IBoardDetails extends grpc.MethodDefinition<commands_board_pb.BoardDetailsReq, commands_board_pb.BoardDetailsResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/BoardDetails"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<commands_board_pb.BoardDetailsReq>;
    requestDeserialize: grpc.deserialize<commands_board_pb.BoardDetailsReq>;
    responseSerialize: grpc.serialize<commands_board_pb.BoardDetailsResp>;
    responseDeserialize: grpc.deserialize<commands_board_pb.BoardDetailsResp>;
}
interface IArduinoCoreService_IBoardAttach extends grpc.MethodDefinition<commands_board_pb.BoardAttachReq, commands_board_pb.BoardAttachResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/BoardAttach"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<commands_board_pb.BoardAttachReq>;
    requestDeserialize: grpc.deserialize<commands_board_pb.BoardAttachReq>;
    responseSerialize: grpc.serialize<commands_board_pb.BoardAttachResp>;
    responseDeserialize: grpc.deserialize<commands_board_pb.BoardAttachResp>;
}
interface IArduinoCoreService_IBoardList extends grpc.MethodDefinition<commands_board_pb.BoardListReq, commands_board_pb.BoardListResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/BoardList"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<commands_board_pb.BoardListReq>;
    requestDeserialize: grpc.deserialize<commands_board_pb.BoardListReq>;
    responseSerialize: grpc.serialize<commands_board_pb.BoardListResp>;
    responseDeserialize: grpc.deserialize<commands_board_pb.BoardListResp>;
}
interface IArduinoCoreService_IBoardListAll extends grpc.MethodDefinition<commands_board_pb.BoardListAllReq, commands_board_pb.BoardListAllResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/BoardListAll"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<commands_board_pb.BoardListAllReq>;
    requestDeserialize: grpc.deserialize<commands_board_pb.BoardListAllReq>;
    responseSerialize: grpc.serialize<commands_board_pb.BoardListAllResp>;
    responseDeserialize: grpc.deserialize<commands_board_pb.BoardListAllResp>;
}
interface IArduinoCoreService_ICompile extends grpc.MethodDefinition<commands_compile_pb.CompileReq, commands_compile_pb.CompileResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/Compile"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<commands_compile_pb.CompileReq>;
    requestDeserialize: grpc.deserialize<commands_compile_pb.CompileReq>;
    responseSerialize: grpc.serialize<commands_compile_pb.CompileResp>;
    responseDeserialize: grpc.deserialize<commands_compile_pb.CompileResp>;
}
interface IArduinoCoreService_IPlatformInstall extends grpc.MethodDefinition<commands_core_pb.PlatformInstallReq, commands_core_pb.PlatformInstallResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/PlatformInstall"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<commands_core_pb.PlatformInstallReq>;
    requestDeserialize: grpc.deserialize<commands_core_pb.PlatformInstallReq>;
    responseSerialize: grpc.serialize<commands_core_pb.PlatformInstallResp>;
    responseDeserialize: grpc.deserialize<commands_core_pb.PlatformInstallResp>;
}
interface IArduinoCoreService_IPlatformDownload extends grpc.MethodDefinition<commands_core_pb.PlatformDownloadReq, commands_core_pb.PlatformDownloadResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/PlatformDownload"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<commands_core_pb.PlatformDownloadReq>;
    requestDeserialize: grpc.deserialize<commands_core_pb.PlatformDownloadReq>;
    responseSerialize: grpc.serialize<commands_core_pb.PlatformDownloadResp>;
    responseDeserialize: grpc.deserialize<commands_core_pb.PlatformDownloadResp>;
}
interface IArduinoCoreService_IPlatformUninstall extends grpc.MethodDefinition<commands_core_pb.PlatformUninstallReq, commands_core_pb.PlatformUninstallResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/PlatformUninstall"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<commands_core_pb.PlatformUninstallReq>;
    requestDeserialize: grpc.deserialize<commands_core_pb.PlatformUninstallReq>;
    responseSerialize: grpc.serialize<commands_core_pb.PlatformUninstallResp>;
    responseDeserialize: grpc.deserialize<commands_core_pb.PlatformUninstallResp>;
}
interface IArduinoCoreService_IPlatformUpgrade extends grpc.MethodDefinition<commands_core_pb.PlatformUpgradeReq, commands_core_pb.PlatformUpgradeResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/PlatformUpgrade"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<commands_core_pb.PlatformUpgradeReq>;
    requestDeserialize: grpc.deserialize<commands_core_pb.PlatformUpgradeReq>;
    responseSerialize: grpc.serialize<commands_core_pb.PlatformUpgradeResp>;
    responseDeserialize: grpc.deserialize<commands_core_pb.PlatformUpgradeResp>;
}
interface IArduinoCoreService_IUpload extends grpc.MethodDefinition<commands_upload_pb.UploadReq, commands_upload_pb.UploadResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/Upload"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<commands_upload_pb.UploadReq>;
    requestDeserialize: grpc.deserialize<commands_upload_pb.UploadReq>;
    responseSerialize: grpc.serialize<commands_upload_pb.UploadResp>;
    responseDeserialize: grpc.deserialize<commands_upload_pb.UploadResp>;
}
interface IArduinoCoreService_IPlatformSearch extends grpc.MethodDefinition<commands_core_pb.PlatformSearchReq, commands_core_pb.PlatformSearchResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/PlatformSearch"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<commands_core_pb.PlatformSearchReq>;
    requestDeserialize: grpc.deserialize<commands_core_pb.PlatformSearchReq>;
    responseSerialize: grpc.serialize<commands_core_pb.PlatformSearchResp>;
    responseDeserialize: grpc.deserialize<commands_core_pb.PlatformSearchResp>;
}
interface IArduinoCoreService_IPlatformList extends grpc.MethodDefinition<commands_core_pb.PlatformListReq, commands_core_pb.PlatformListResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/PlatformList"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<commands_core_pb.PlatformListReq>;
    requestDeserialize: grpc.deserialize<commands_core_pb.PlatformListReq>;
    responseSerialize: grpc.serialize<commands_core_pb.PlatformListResp>;
    responseDeserialize: grpc.deserialize<commands_core_pb.PlatformListResp>;
}
interface IArduinoCoreService_ILibraryDownload extends grpc.MethodDefinition<commands_lib_pb.LibraryDownloadReq, commands_lib_pb.LibraryDownloadResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/LibraryDownload"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<commands_lib_pb.LibraryDownloadReq>;
    requestDeserialize: grpc.deserialize<commands_lib_pb.LibraryDownloadReq>;
    responseSerialize: grpc.serialize<commands_lib_pb.LibraryDownloadResp>;
    responseDeserialize: grpc.deserialize<commands_lib_pb.LibraryDownloadResp>;
}
interface IArduinoCoreService_ILibraryInstall extends grpc.MethodDefinition<commands_lib_pb.LibraryInstallReq, commands_lib_pb.LibraryInstallResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/LibraryInstall"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<commands_lib_pb.LibraryInstallReq>;
    requestDeserialize: grpc.deserialize<commands_lib_pb.LibraryInstallReq>;
    responseSerialize: grpc.serialize<commands_lib_pb.LibraryInstallResp>;
    responseDeserialize: grpc.deserialize<commands_lib_pb.LibraryInstallResp>;
}
interface IArduinoCoreService_ILibraryUninstall extends grpc.MethodDefinition<commands_lib_pb.LibraryUninstallReq, commands_lib_pb.LibraryUninstallResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/LibraryUninstall"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<commands_lib_pb.LibraryUninstallReq>;
    requestDeserialize: grpc.deserialize<commands_lib_pb.LibraryUninstallReq>;
    responseSerialize: grpc.serialize<commands_lib_pb.LibraryUninstallResp>;
    responseDeserialize: grpc.deserialize<commands_lib_pb.LibraryUninstallResp>;
}
interface IArduinoCoreService_ILibraryUpgradeAll extends grpc.MethodDefinition<commands_lib_pb.LibraryUpgradeAllReq, commands_lib_pb.LibraryUpgradeAllResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/LibraryUpgradeAll"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<commands_lib_pb.LibraryUpgradeAllReq>;
    requestDeserialize: grpc.deserialize<commands_lib_pb.LibraryUpgradeAllReq>;
    responseSerialize: grpc.serialize<commands_lib_pb.LibraryUpgradeAllResp>;
    responseDeserialize: grpc.deserialize<commands_lib_pb.LibraryUpgradeAllResp>;
}
interface IArduinoCoreService_ILibrarySearch extends grpc.MethodDefinition<commands_lib_pb.LibrarySearchReq, commands_lib_pb.LibrarySearchResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/LibrarySearch"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<commands_lib_pb.LibrarySearchReq>;
    requestDeserialize: grpc.deserialize<commands_lib_pb.LibrarySearchReq>;
    responseSerialize: grpc.serialize<commands_lib_pb.LibrarySearchResp>;
    responseDeserialize: grpc.deserialize<commands_lib_pb.LibrarySearchResp>;
}
interface IArduinoCoreService_ILibraryList extends grpc.MethodDefinition<commands_lib_pb.LibraryListReq, commands_lib_pb.LibraryListResp> {
    path: string; // "/cc.arduino.cli.commands.ArduinoCore/LibraryList"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<commands_lib_pb.LibraryListReq>;
    requestDeserialize: grpc.deserialize<commands_lib_pb.LibraryListReq>;
    responseSerialize: grpc.serialize<commands_lib_pb.LibraryListResp>;
    responseDeserialize: grpc.deserialize<commands_lib_pb.LibraryListResp>;
}

export const ArduinoCoreService: IArduinoCoreService;

export interface IArduinoCoreServer {
    init: grpc.handleServerStreamingCall<commands_commands_pb.InitReq, commands_commands_pb.InitResp>;
    destroy: grpc.handleUnaryCall<commands_commands_pb.DestroyReq, commands_commands_pb.DestroyResp>;
    rescan: grpc.handleUnaryCall<commands_commands_pb.RescanReq, commands_commands_pb.RescanResp>;
    updateIndex: grpc.handleServerStreamingCall<commands_commands_pb.UpdateIndexReq, commands_commands_pb.UpdateIndexResp>;
    updateLibrariesIndex: grpc.handleServerStreamingCall<commands_commands_pb.UpdateLibrariesIndexReq, commands_commands_pb.UpdateLibrariesIndexResp>;
    version: grpc.handleUnaryCall<commands_commands_pb.VersionReq, commands_commands_pb.VersionResp>;
    boardDetails: grpc.handleUnaryCall<commands_board_pb.BoardDetailsReq, commands_board_pb.BoardDetailsResp>;
    boardAttach: grpc.handleServerStreamingCall<commands_board_pb.BoardAttachReq, commands_board_pb.BoardAttachResp>;
    boardList: grpc.handleUnaryCall<commands_board_pb.BoardListReq, commands_board_pb.BoardListResp>;
    boardListAll: grpc.handleUnaryCall<commands_board_pb.BoardListAllReq, commands_board_pb.BoardListAllResp>;
    compile: grpc.handleServerStreamingCall<commands_compile_pb.CompileReq, commands_compile_pb.CompileResp>;
    platformInstall: grpc.handleServerStreamingCall<commands_core_pb.PlatformInstallReq, commands_core_pb.PlatformInstallResp>;
    platformDownload: grpc.handleServerStreamingCall<commands_core_pb.PlatformDownloadReq, commands_core_pb.PlatformDownloadResp>;
    platformUninstall: grpc.handleServerStreamingCall<commands_core_pb.PlatformUninstallReq, commands_core_pb.PlatformUninstallResp>;
    platformUpgrade: grpc.handleServerStreamingCall<commands_core_pb.PlatformUpgradeReq, commands_core_pb.PlatformUpgradeResp>;
    upload: grpc.handleServerStreamingCall<commands_upload_pb.UploadReq, commands_upload_pb.UploadResp>;
    platformSearch: grpc.handleUnaryCall<commands_core_pb.PlatformSearchReq, commands_core_pb.PlatformSearchResp>;
    platformList: grpc.handleUnaryCall<commands_core_pb.PlatformListReq, commands_core_pb.PlatformListResp>;
    libraryDownload: grpc.handleServerStreamingCall<commands_lib_pb.LibraryDownloadReq, commands_lib_pb.LibraryDownloadResp>;
    libraryInstall: grpc.handleServerStreamingCall<commands_lib_pb.LibraryInstallReq, commands_lib_pb.LibraryInstallResp>;
    libraryUninstall: grpc.handleServerStreamingCall<commands_lib_pb.LibraryUninstallReq, commands_lib_pb.LibraryUninstallResp>;
    libraryUpgradeAll: grpc.handleServerStreamingCall<commands_lib_pb.LibraryUpgradeAllReq, commands_lib_pb.LibraryUpgradeAllResp>;
    librarySearch: grpc.handleUnaryCall<commands_lib_pb.LibrarySearchReq, commands_lib_pb.LibrarySearchResp>;
    libraryList: grpc.handleUnaryCall<commands_lib_pb.LibraryListReq, commands_lib_pb.LibraryListResp>;
}

export interface IArduinoCoreClient {
    init(request: commands_commands_pb.InitReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_commands_pb.InitResp>;
    init(request: commands_commands_pb.InitReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_commands_pb.InitResp>;
    destroy(request: commands_commands_pb.DestroyReq, callback: (error: grpc.ServiceError | null, response: commands_commands_pb.DestroyResp) => void): grpc.ClientUnaryCall;
    destroy(request: commands_commands_pb.DestroyReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_commands_pb.DestroyResp) => void): grpc.ClientUnaryCall;
    destroy(request: commands_commands_pb.DestroyReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_commands_pb.DestroyResp) => void): grpc.ClientUnaryCall;
    rescan(request: commands_commands_pb.RescanReq, callback: (error: grpc.ServiceError | null, response: commands_commands_pb.RescanResp) => void): grpc.ClientUnaryCall;
    rescan(request: commands_commands_pb.RescanReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_commands_pb.RescanResp) => void): grpc.ClientUnaryCall;
    rescan(request: commands_commands_pb.RescanReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_commands_pb.RescanResp) => void): grpc.ClientUnaryCall;
    updateIndex(request: commands_commands_pb.UpdateIndexReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_commands_pb.UpdateIndexResp>;
    updateIndex(request: commands_commands_pb.UpdateIndexReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_commands_pb.UpdateIndexResp>;
    updateLibrariesIndex(request: commands_commands_pb.UpdateLibrariesIndexReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_commands_pb.UpdateLibrariesIndexResp>;
    updateLibrariesIndex(request: commands_commands_pb.UpdateLibrariesIndexReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_commands_pb.UpdateLibrariesIndexResp>;
    version(request: commands_commands_pb.VersionReq, callback: (error: grpc.ServiceError | null, response: commands_commands_pb.VersionResp) => void): grpc.ClientUnaryCall;
    version(request: commands_commands_pb.VersionReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_commands_pb.VersionResp) => void): grpc.ClientUnaryCall;
    version(request: commands_commands_pb.VersionReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_commands_pb.VersionResp) => void): grpc.ClientUnaryCall;
    boardDetails(request: commands_board_pb.BoardDetailsReq, callback: (error: grpc.ServiceError | null, response: commands_board_pb.BoardDetailsResp) => void): grpc.ClientUnaryCall;
    boardDetails(request: commands_board_pb.BoardDetailsReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_board_pb.BoardDetailsResp) => void): grpc.ClientUnaryCall;
    boardDetails(request: commands_board_pb.BoardDetailsReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_board_pb.BoardDetailsResp) => void): grpc.ClientUnaryCall;
    boardAttach(request: commands_board_pb.BoardAttachReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_board_pb.BoardAttachResp>;
    boardAttach(request: commands_board_pb.BoardAttachReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_board_pb.BoardAttachResp>;
    boardList(request: commands_board_pb.BoardListReq, callback: (error: grpc.ServiceError | null, response: commands_board_pb.BoardListResp) => void): grpc.ClientUnaryCall;
    boardList(request: commands_board_pb.BoardListReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_board_pb.BoardListResp) => void): grpc.ClientUnaryCall;
    boardList(request: commands_board_pb.BoardListReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_board_pb.BoardListResp) => void): grpc.ClientUnaryCall;
    boardListAll(request: commands_board_pb.BoardListAllReq, callback: (error: grpc.ServiceError | null, response: commands_board_pb.BoardListAllResp) => void): grpc.ClientUnaryCall;
    boardListAll(request: commands_board_pb.BoardListAllReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_board_pb.BoardListAllResp) => void): grpc.ClientUnaryCall;
    boardListAll(request: commands_board_pb.BoardListAllReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_board_pb.BoardListAllResp) => void): grpc.ClientUnaryCall;
    compile(request: commands_compile_pb.CompileReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_compile_pb.CompileResp>;
    compile(request: commands_compile_pb.CompileReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_compile_pb.CompileResp>;
    platformInstall(request: commands_core_pb.PlatformInstallReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_core_pb.PlatformInstallResp>;
    platformInstall(request: commands_core_pb.PlatformInstallReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_core_pb.PlatformInstallResp>;
    platformDownload(request: commands_core_pb.PlatformDownloadReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_core_pb.PlatformDownloadResp>;
    platformDownload(request: commands_core_pb.PlatformDownloadReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_core_pb.PlatformDownloadResp>;
    platformUninstall(request: commands_core_pb.PlatformUninstallReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_core_pb.PlatformUninstallResp>;
    platformUninstall(request: commands_core_pb.PlatformUninstallReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_core_pb.PlatformUninstallResp>;
    platformUpgrade(request: commands_core_pb.PlatformUpgradeReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_core_pb.PlatformUpgradeResp>;
    platformUpgrade(request: commands_core_pb.PlatformUpgradeReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_core_pb.PlatformUpgradeResp>;
    upload(request: commands_upload_pb.UploadReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_upload_pb.UploadResp>;
    upload(request: commands_upload_pb.UploadReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_upload_pb.UploadResp>;
    platformSearch(request: commands_core_pb.PlatformSearchReq, callback: (error: grpc.ServiceError | null, response: commands_core_pb.PlatformSearchResp) => void): grpc.ClientUnaryCall;
    platformSearch(request: commands_core_pb.PlatformSearchReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_core_pb.PlatformSearchResp) => void): grpc.ClientUnaryCall;
    platformSearch(request: commands_core_pb.PlatformSearchReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_core_pb.PlatformSearchResp) => void): grpc.ClientUnaryCall;
    platformList(request: commands_core_pb.PlatformListReq, callback: (error: grpc.ServiceError | null, response: commands_core_pb.PlatformListResp) => void): grpc.ClientUnaryCall;
    platformList(request: commands_core_pb.PlatformListReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_core_pb.PlatformListResp) => void): grpc.ClientUnaryCall;
    platformList(request: commands_core_pb.PlatformListReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_core_pb.PlatformListResp) => void): grpc.ClientUnaryCall;
    libraryDownload(request: commands_lib_pb.LibraryDownloadReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_lib_pb.LibraryDownloadResp>;
    libraryDownload(request: commands_lib_pb.LibraryDownloadReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_lib_pb.LibraryDownloadResp>;
    libraryInstall(request: commands_lib_pb.LibraryInstallReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_lib_pb.LibraryInstallResp>;
    libraryInstall(request: commands_lib_pb.LibraryInstallReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_lib_pb.LibraryInstallResp>;
    libraryUninstall(request: commands_lib_pb.LibraryUninstallReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_lib_pb.LibraryUninstallResp>;
    libraryUninstall(request: commands_lib_pb.LibraryUninstallReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_lib_pb.LibraryUninstallResp>;
    libraryUpgradeAll(request: commands_lib_pb.LibraryUpgradeAllReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_lib_pb.LibraryUpgradeAllResp>;
    libraryUpgradeAll(request: commands_lib_pb.LibraryUpgradeAllReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_lib_pb.LibraryUpgradeAllResp>;
    librarySearch(request: commands_lib_pb.LibrarySearchReq, callback: (error: grpc.ServiceError | null, response: commands_lib_pb.LibrarySearchResp) => void): grpc.ClientUnaryCall;
    librarySearch(request: commands_lib_pb.LibrarySearchReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_lib_pb.LibrarySearchResp) => void): grpc.ClientUnaryCall;
    librarySearch(request: commands_lib_pb.LibrarySearchReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_lib_pb.LibrarySearchResp) => void): grpc.ClientUnaryCall;
    libraryList(request: commands_lib_pb.LibraryListReq, callback: (error: grpc.ServiceError | null, response: commands_lib_pb.LibraryListResp) => void): grpc.ClientUnaryCall;
    libraryList(request: commands_lib_pb.LibraryListReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_lib_pb.LibraryListResp) => void): grpc.ClientUnaryCall;
    libraryList(request: commands_lib_pb.LibraryListReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_lib_pb.LibraryListResp) => void): grpc.ClientUnaryCall;
}

export class ArduinoCoreClient extends grpc.Client implements IArduinoCoreClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public init(request: commands_commands_pb.InitReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_commands_pb.InitResp>;
    public init(request: commands_commands_pb.InitReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_commands_pb.InitResp>;
    public destroy(request: commands_commands_pb.DestroyReq, callback: (error: grpc.ServiceError | null, response: commands_commands_pb.DestroyResp) => void): grpc.ClientUnaryCall;
    public destroy(request: commands_commands_pb.DestroyReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_commands_pb.DestroyResp) => void): grpc.ClientUnaryCall;
    public destroy(request: commands_commands_pb.DestroyReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_commands_pb.DestroyResp) => void): grpc.ClientUnaryCall;
    public rescan(request: commands_commands_pb.RescanReq, callback: (error: grpc.ServiceError | null, response: commands_commands_pb.RescanResp) => void): grpc.ClientUnaryCall;
    public rescan(request: commands_commands_pb.RescanReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_commands_pb.RescanResp) => void): grpc.ClientUnaryCall;
    public rescan(request: commands_commands_pb.RescanReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_commands_pb.RescanResp) => void): grpc.ClientUnaryCall;
    public updateIndex(request: commands_commands_pb.UpdateIndexReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_commands_pb.UpdateIndexResp>;
    public updateIndex(request: commands_commands_pb.UpdateIndexReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_commands_pb.UpdateIndexResp>;
    public updateLibrariesIndex(request: commands_commands_pb.UpdateLibrariesIndexReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_commands_pb.UpdateLibrariesIndexResp>;
    public updateLibrariesIndex(request: commands_commands_pb.UpdateLibrariesIndexReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_commands_pb.UpdateLibrariesIndexResp>;
    public version(request: commands_commands_pb.VersionReq, callback: (error: grpc.ServiceError | null, response: commands_commands_pb.VersionResp) => void): grpc.ClientUnaryCall;
    public version(request: commands_commands_pb.VersionReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_commands_pb.VersionResp) => void): grpc.ClientUnaryCall;
    public version(request: commands_commands_pb.VersionReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_commands_pb.VersionResp) => void): grpc.ClientUnaryCall;
    public boardDetails(request: commands_board_pb.BoardDetailsReq, callback: (error: grpc.ServiceError | null, response: commands_board_pb.BoardDetailsResp) => void): grpc.ClientUnaryCall;
    public boardDetails(request: commands_board_pb.BoardDetailsReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_board_pb.BoardDetailsResp) => void): grpc.ClientUnaryCall;
    public boardDetails(request: commands_board_pb.BoardDetailsReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_board_pb.BoardDetailsResp) => void): grpc.ClientUnaryCall;
    public boardAttach(request: commands_board_pb.BoardAttachReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_board_pb.BoardAttachResp>;
    public boardAttach(request: commands_board_pb.BoardAttachReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_board_pb.BoardAttachResp>;
    public boardList(request: commands_board_pb.BoardListReq, callback: (error: grpc.ServiceError | null, response: commands_board_pb.BoardListResp) => void): grpc.ClientUnaryCall;
    public boardList(request: commands_board_pb.BoardListReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_board_pb.BoardListResp) => void): grpc.ClientUnaryCall;
    public boardList(request: commands_board_pb.BoardListReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_board_pb.BoardListResp) => void): grpc.ClientUnaryCall;
    public boardListAll(request: commands_board_pb.BoardListAllReq, callback: (error: grpc.ServiceError | null, response: commands_board_pb.BoardListAllResp) => void): grpc.ClientUnaryCall;
    public boardListAll(request: commands_board_pb.BoardListAllReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_board_pb.BoardListAllResp) => void): grpc.ClientUnaryCall;
    public boardListAll(request: commands_board_pb.BoardListAllReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_board_pb.BoardListAllResp) => void): grpc.ClientUnaryCall;
    public compile(request: commands_compile_pb.CompileReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_compile_pb.CompileResp>;
    public compile(request: commands_compile_pb.CompileReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_compile_pb.CompileResp>;
    public platformInstall(request: commands_core_pb.PlatformInstallReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_core_pb.PlatformInstallResp>;
    public platformInstall(request: commands_core_pb.PlatformInstallReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_core_pb.PlatformInstallResp>;
    public platformDownload(request: commands_core_pb.PlatformDownloadReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_core_pb.PlatformDownloadResp>;
    public platformDownload(request: commands_core_pb.PlatformDownloadReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_core_pb.PlatformDownloadResp>;
    public platformUninstall(request: commands_core_pb.PlatformUninstallReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_core_pb.PlatformUninstallResp>;
    public platformUninstall(request: commands_core_pb.PlatformUninstallReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_core_pb.PlatformUninstallResp>;
    public platformUpgrade(request: commands_core_pb.PlatformUpgradeReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_core_pb.PlatformUpgradeResp>;
    public platformUpgrade(request: commands_core_pb.PlatformUpgradeReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_core_pb.PlatformUpgradeResp>;
    public upload(request: commands_upload_pb.UploadReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_upload_pb.UploadResp>;
    public upload(request: commands_upload_pb.UploadReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_upload_pb.UploadResp>;
    public platformSearch(request: commands_core_pb.PlatformSearchReq, callback: (error: grpc.ServiceError | null, response: commands_core_pb.PlatformSearchResp) => void): grpc.ClientUnaryCall;
    public platformSearch(request: commands_core_pb.PlatformSearchReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_core_pb.PlatformSearchResp) => void): grpc.ClientUnaryCall;
    public platformSearch(request: commands_core_pb.PlatformSearchReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_core_pb.PlatformSearchResp) => void): grpc.ClientUnaryCall;
    public platformList(request: commands_core_pb.PlatformListReq, callback: (error: grpc.ServiceError | null, response: commands_core_pb.PlatformListResp) => void): grpc.ClientUnaryCall;
    public platformList(request: commands_core_pb.PlatformListReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_core_pb.PlatformListResp) => void): grpc.ClientUnaryCall;
    public platformList(request: commands_core_pb.PlatformListReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_core_pb.PlatformListResp) => void): grpc.ClientUnaryCall;
    public libraryDownload(request: commands_lib_pb.LibraryDownloadReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_lib_pb.LibraryDownloadResp>;
    public libraryDownload(request: commands_lib_pb.LibraryDownloadReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_lib_pb.LibraryDownloadResp>;
    public libraryInstall(request: commands_lib_pb.LibraryInstallReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_lib_pb.LibraryInstallResp>;
    public libraryInstall(request: commands_lib_pb.LibraryInstallReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_lib_pb.LibraryInstallResp>;
    public libraryUninstall(request: commands_lib_pb.LibraryUninstallReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_lib_pb.LibraryUninstallResp>;
    public libraryUninstall(request: commands_lib_pb.LibraryUninstallReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_lib_pb.LibraryUninstallResp>;
    public libraryUpgradeAll(request: commands_lib_pb.LibraryUpgradeAllReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_lib_pb.LibraryUpgradeAllResp>;
    public libraryUpgradeAll(request: commands_lib_pb.LibraryUpgradeAllReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<commands_lib_pb.LibraryUpgradeAllResp>;
    public librarySearch(request: commands_lib_pb.LibrarySearchReq, callback: (error: grpc.ServiceError | null, response: commands_lib_pb.LibrarySearchResp) => void): grpc.ClientUnaryCall;
    public librarySearch(request: commands_lib_pb.LibrarySearchReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_lib_pb.LibrarySearchResp) => void): grpc.ClientUnaryCall;
    public librarySearch(request: commands_lib_pb.LibrarySearchReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_lib_pb.LibrarySearchResp) => void): grpc.ClientUnaryCall;
    public libraryList(request: commands_lib_pb.LibraryListReq, callback: (error: grpc.ServiceError | null, response: commands_lib_pb.LibraryListResp) => void): grpc.ClientUnaryCall;
    public libraryList(request: commands_lib_pb.LibraryListReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_lib_pb.LibraryListResp) => void): grpc.ClientUnaryCall;
    public libraryList(request: commands_lib_pb.LibraryListReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_lib_pb.LibraryListResp) => void): grpc.ClientUnaryCall;
}
