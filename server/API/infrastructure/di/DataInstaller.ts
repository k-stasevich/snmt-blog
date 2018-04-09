import { InstallerBase } from './InstallerBase';
import {
  PostRepository,
  CommentRepository,
  PostsTagRepository,
  TagRepository,
  UserRepository,
  SessionRepository,
} from '../../../Data/Repositories/Impl/index';

import {
  IPostRepository,
  ICommentRepository,
  IPostsTagRepository,
  ITagRepository,
  IUserRepository,
  ISessionRepository,
} from '../../../Data/Repositories/index';

import PostEntity from '../../../Data/Entities/PostEntity';
import CommentEntity from '../../../Data/Entities/CommentEntity';
import PostsTagEntity from '../../../Data/Entities/PostsTagEntity';
import TagEntity from '../../../Data/Entities/TagEntity';
import UserEntity from '../../../Data/Entities/UserEntity';

import { DbContext } from '../../../Data/DbContext';
import SessionEntity from '../../../Data/Entities/SessionEntity';
export class DataInstaller extends InstallerBase {
  public install(): void {
    this.container
      .bind<IPostRepository>('PostRepository')
      .toConstantValue(new PostRepository(PostEntity));
    this.container
      .bind<ICommentRepository>('CommentRepository')
      .toConstantValue(new CommentRepository(CommentEntity));
    this.container
      .bind<IPostsTagRepository>('PostsTagRepository')
      .toConstantValue(new PostsTagRepository(PostsTagEntity));
    this.container
      .bind<IPostsTagRepository>('PostsTagRepository')
      .toConstantValue(new PostsTagRepository(PostsTagEntity));
    this.container
      .bind<ITagRepository>('TagRepository')
      .toConstantValue(new TagRepository(TagEntity));
    this.container
      .bind<IUserRepository>('UserRepository')
      .toConstantValue(new UserRepository(UserEntity));
    this.container
      .bind<ISessionRepository>('SessionRepository')
      .toConstantValue(new SessionRepository(SessionEntity));
    this.container
      .bind<DbContext>('DbContext')
      .to(DbContext)
      .inSingletonScope();
  }
}
